import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#4F2C1D',
  gold: '#F2A900',
  goldDark: '#E68541',
  blue: '#1c4684',
  surface: '#f9f9ff',
  surfaceContainer: '#e9edff',
  surfaceVariant: '#FBF6EC',
  darkBg: '#141b2b',
  onSurface: '#141b2b',
  onSurfaceVariant: '#434750',
  subtle: '#737781',
  outline: '#E5E7EB',
  error: '#B3261E',
};

export const theme: DefaultTheme = {
  colors,
  textColor: colors.onSurfaceVariant,
};

export type Theme = typeof theme;

export type Color = typeof colors;
