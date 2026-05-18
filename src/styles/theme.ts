import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',

  primary: {
    main: '#39170e',
    dark: '#4f2c1d',
    deep: '#662E0B',
    bg: 'rgb(255, 251, 246)',
  },

  secondary: {
    tangerin: '#f3b744',
    orange: '#E68541',
    blue: '#385e9d',
    lightBlue: '#3365AB',
  },

  text: {
    default: '#37474F',
    sub: '#70655e',
  },

  bg: {
    light: '#f2f2f2',
  },
};

export const theme: DefaultTheme = {
  colors,
  textColor: colors.text.default,
};

export type Theme = typeof theme;

export type Color = typeof colors;
