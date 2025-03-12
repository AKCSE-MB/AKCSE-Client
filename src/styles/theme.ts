import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  blue: '#385e9d',
  brown: '#662E0B',
  gray: '8B8B8B',
  dark_brown: '#4f2c1d',
  yellow: '#FEE500',
  tangerin: '#f3b744',
  cherry: '#39170e',
  primary: {
    y90: '#FF7002',
  },
  secondary: {
    o90: '#C13001',
  },
  light_orange: 'rgb(243, 183, 68)',
  neutral: {
    bg90: '#253238',
    bg80: '#37474F',
  },
};

export const theme: DefaultTheme = {
  colors,
  textColor: colors.neutral.bg80,
};

export type Theme = typeof theme;

export type Color = typeof colors;
