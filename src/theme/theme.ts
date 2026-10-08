import { Platform } from 'react-native';

export const colors = {
  bg: '#f6f7fb',
  surface: '#ffffff',
  border: '#e2e6ef',
  borderStrong: '#c8cfdd',
  text: '#0f172a',
  textMuted: '#475569',
  textFaint: '#8a94a6',
  accent: '#1e3a8a',
  accentSoft: '#e8eefb',
  accentMid: '#3b5bdb',
  highlight: '#f59e0b',
  highlightSoft: '#fff7e6',
  highlightText: '#7c2d12',
  warn: '#c0392b',
  warnSoft: '#fbeae8',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
};

export const typography = {
  h1: { fontSize: 26, fontWeight: '700' as const, color: colors.text },
  h2: { fontSize: 17, fontWeight: '700' as const, color: colors.text },
  subtitle: { fontSize: 13, fontWeight: '500' as const, color: colors.textMuted },
  label: { fontSize: 12, fontWeight: '700' as const, color: colors.textMuted, letterSpacing: 0.3, textTransform: 'uppercase' as const },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.text },
  value: { fontSize: 19, fontWeight: '700' as const, color: colors.text },
  valueAccent: { fontSize: 19, fontWeight: '700' as const, color: colors.accent },
  formula: { fontSize: 12.5, fontWeight: '400' as const, color: colors.textMuted },
  note: { fontSize: 12, fontWeight: '400' as const, color: colors.textFaint, lineHeight: 18 },
};

export const shadow = {
  card: Platform.select({
    web: { boxShadow: '0px 2px 10px rgba(15, 23, 42, 0.07)' } as any,
    default: {
      shadowColor: '#0f172a',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },
  }),
};
