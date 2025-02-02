import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  blue: '#385e9d',
  light_blue: '00a3e0',
  ivory: '#f9f9f9',
  brown: '#662E0B',
  orange: 'E68541',
  green: '4EAE9A',
  gray: '8B8B8B',
  dark_gray: '70655E',
  White_Smoke: '#F2F2F2',
  dark_ivory: '#f7ebcd',
  dark_brown: '#4f2c1d',
  yellow: '#f2a900',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#DAA520',
  primary: {
    y90: '#FF7002',
  },
  secondary: {
    o90: '#C13001',
  },
  neutral: {
    bg90: '#253238',
    bg80: '#37474F',
  },
  simentic: {
    dg90: '#207B00',
    dg50: '#3FC500',
    r90: '#CB2528',
    r60: '#E53835',
    black: '#000000',
    white: '#FFFFFF',
  },
};

export const theme: DefaultTheme = {
  colors,
  textColor: colors.neutral.bg80,
};

export type Theme = typeof theme;

export type Color = typeof colors;
