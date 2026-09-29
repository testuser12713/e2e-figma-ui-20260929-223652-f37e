import { TextStyle } from 'react-native';

export const colors = {
  bg: '#F4F5FA',
  bgAlt: '#F4F4F4',
  bgTint: '#ECF1FA',
  surface: '#FFFFFF',
  fg: '#23233C',
  fgStrong: '#1C1C1C',
  fgOnAccent: '#FFFFFF',
  accent: '#6CC57C',
  accentDark: '#179F2F',
  accentSoft: '#61D27C',
  accentTranslucent20: '#61D27C33',
  accentTranslucent47: '#6CC57C78',
  accentTranslucent64: '#6CC57CA3',
  accentTranslucent85: '#6CC57CD9',
  onAccent: '#FFFFFF',
  contrast: '#23233C',
  muted: '#A5A5A5',
  mutedSoft: '#B4B4B4',
  border: '#707070',
  tabInactive: '#BBC7DB',
  indigo: '#181461',
  ink: '#2B2B2B',
  dividerHairline: '#1C1C1C33',
  dividerSoft: '#7070702E',
  dividerWarm: '#C48B302E',
  dotInactive: '#E3E3E3',
  avatarFallback: '#DCE5F4',
  facebook: '#0F279E',
  error: '#C48B30',
  success: '#179F2F',
} as const;

export const spacing = {
  space0: 4,
  space1: 8,
  space2: 12,
  space3: 16,
  space4: 24,
  space5: 40,
  space6: 56,
} as const;

export const radii = {
  sm: 3,
  md: 5,
  lg: 8,
  xl: 10,
  '2xl': 12,
  '3xl': 18,
  card: 20,
  pill: 999,
} as const;

export const fontFamily = {
  heading: "Aleo, Georgia, 'Times New Roman', serif",
  body:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  alt: "Ubuntu, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  form: "Actor, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
} as const;

export const typography = {
  heading: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
  } as TextStyle,
  body: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
  } as TextStyle,
  text40: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 51,
  } as TextStyle,
  text25: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
  } as TextStyle,
  text24: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
  } as TextStyle,
  text17: {
    fontFamily: fontFamily.alt,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
  } as TextStyle,
  text16: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  } as TextStyle,
  text16Alt: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  } as TextStyle,
  text15: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19,
  } as TextStyle,
  text14: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  } as TextStyle,
  text14Alt: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  } as TextStyle,
  text13: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
  } as TextStyle,
  text12: {
    fontFamily: fontFamily.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  } as TextStyle,
  text12Alt: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  } as TextStyle,
  text11: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.3,
  } as TextStyle,
  text10: {
    fontFamily: fontFamily.body,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
  } as TextStyle,
  text9: {
    fontFamily: fontFamily.body,
    fontWeight: '100',
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
  } as TextStyle,
  text7: {
    fontFamily: fontFamily.heading,
    fontWeight: '700',
    fontSize: 7,
    lineHeight: 5,
  } as TextStyle,
  label: {
    fontFamily: fontFamily.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  } as TextStyle,
} as const;

export const theme = {
  colors,
  spacing,
  radii,
  fontFamily,
  typography,
} as const;

export type Theme = typeof theme;
