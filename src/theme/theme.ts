import { Platform } from 'react-native';

export const colors = {
  bg: '#f2f5f3',
  surface: '#ffffff',
  border: '#e1e6e3',
  borderStrong: '#c7cfca',
  text: '#161c19',
  textMuted: '#5b655f',
  textFaint: '#8a938d',
  accent: '#1d6f42',
  accentSoft: '#e6f2ea',
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
    web: { boxShadow: '0px 2px 8px rgba(11, 31, 20, 0.06)' } as any,
    default: {
      shadowColor: '#0b1f14',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },
  }),
};
