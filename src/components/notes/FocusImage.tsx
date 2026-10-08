import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, LayoutChangeEvent, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Focus } from '../../content/types';
import { colors, radius } from '../../theme/theme';

const useNativeDriver = Platform.OS !== 'web';

type Size = { w: number; h: number };

/** Natural size of a bundled image, when the platform can tell it synchronously. */
function assetSize(source: any): Size | null {
  const resolve = (Image as any).resolveAssetSource;
  const s = typeof resolve === 'function' ? resolve(source) : typeof source === 'object' ? source : null;
  return s && s.width && s.height ? { w: s.width, h: s.height } : null;
}

/**
 * Shows the whole image with an amber frame around `focus`, then zooms into that area
 * (like pointing at the right row of a datasheet). The reader can switch back to the full view.
 */
export function FocusImage({ source, focus, lang, delay = 1100 }: { source: any; focus?: Focus; lang: 'fr' | 'en'; delay?: number }) {
  const [frame, setFrame] = useState<Size | null>(null);
  const [natural, setNatural] = useState<Size | null>(() => assetSize(source));
  const [zoomOn, setZoomOn] = useState(true);
  const z = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!focus || !frame || !natural) return;
    const timer = setTimeout(
      () => Animated.timing(z, { toValue: zoomOn ? 1 : 0, duration: 900, easing: Easing.inOut(Easing.cubic), useNativeDriver }).start(),
      zoomOn ? delay : 0
    );
    return () => clearTimeout(timer);
  }, [focus, frame, natural, zoomOn, delay, z]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (!frame || frame.w !== width || frame.h !== height) setFrame({ w: width, h: height });
  };
  const onLoad = (e: any) => {
    const s = e?.nativeEvent?.source;
    if (!natural && s?.width && s?.height) setNatural({ w: s.width, h: s.height });
  };

  if (!focus || !frame || !natural) {
    return (
      <View style={styles.fill} onLayout={onLayout}>
        <Image source={source} style={styles.fill} resizeMode="contain" onLoad={onLoad} />
      </View>
    );
  }

  // Geometry of the "contain" image inside the frame, then the focus rectangle in frame coordinates.
  const s0 = Math.min(frame.w / natural.w, frame.h / natural.h);
  const dw = natural.w * s0;
  const dh = natural.h * s0;
  const ox = (frame.w - dw) / 2;
  const oy = (frame.h - dh) / 2;
  const rx = ox + focus.x * dw;
  const ry = oy + focus.y * dh;
  const rw = Math.max(1, focus.w * dw);
  const rh = Math.max(1, focus.h * dh);
  const k = Math.min(6, Math.min(frame.w / rw, frame.h / rh) * 0.92);
  const dx = frame.w / 2 - (rx + rw / 2);
  const dy = frame.h / 2 - (ry + rh / 2);

  const scale = z.interpolate({ inputRange: [0, 1], outputRange: [1, k] });
  const moved = Animated.multiply(scale, z);
  const transform = [
    { translateX: Animated.multiply(moved, dx) },
    { translateY: Animated.multiply(moved, dy) },
    { scale },
  ];

  return (
    <View style={styles.fill} onLayout={onLayout}>
      <Animated.View style={[styles.fill, { transform }]}>
        <Image source={source} style={styles.fill} resizeMode="contain" onLoad={onLoad} />
        <Animated.View
          pointerEvents="none"
          style={[styles.focusBox, { left: rx - 3, top: ry - 3, width: rw + 6, height: rh + 6, opacity: z.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0.4, 0] }) }]}
        />
      </Animated.View>
      <TouchableOpacity style={styles.toggle} onPress={() => setZoomOn((v) => !v)} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
        <Text style={styles.toggleText}>
          {zoomOn ? (lang === 'fr' ? '🔍 Vue complète' : '🔍 Full view') : lang === 'fr' ? '🔍 Zoomer' : '🔍 Zoom in'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { width: '100%', height: '100%' },
  focusBox: { position: 'absolute', borderWidth: 3, borderColor: colors.highlight, borderRadius: 6 },
  toggle: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
  },
  toggleText: { color: '#fff', fontSize: 11, fontWeight: '700' },
});
