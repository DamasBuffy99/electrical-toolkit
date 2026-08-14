import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../../theme/theme';

type Props = {
  source: ImageSourcePropType;
  caption?: string;
  height?: number;
};

export default function ReferenceImage({ source, caption, height = 200 }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={source} style={[styles.image, { height }]} resizeMode="contain" />
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: spacing.md },
  image: {
    width: '100%',
    borderRadius: radius.sm,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
  },
  caption: {
    fontSize: 11,
    color: colors.textFaint,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});
