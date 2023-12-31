export const BLUE_SKY = '#2596be';
export const BLUE_SKY_LIGHT = 'rgba(28,86,134, 0.8)';
export const BLUE_SKY_DARK = '#154064';
export const WHITE = 'rgb(220, 232, 230)';
export const BLACK = 'black';
export const BLACK_OPACITY = 'rgba(255,255,255, 0.2)';
export const BLACK_LIGHT = 'rgb(43, 43, 46)';
export const BLACK_SHADOW = 'rgba(0, 0, 0, 0.2)';
export const GREY_LIGHT = '#b0a7a7';
export const RED = '#be2f2f';
export const RED_LIGHT = '#f2d7d7';
export const BLACK_OVERLAY = 'rgba(0, 0, 0, 0.5)';

export const lightTheme = {
  text: {
    primary: BLACK,
    secondary: WHITE,
  },
  navigator: {
    primary: BLUE_SKY_DARK,
    secondary: BLUE_SKY_LIGHT,
  },
  button: {
    primary: BLUE_SKY_LIGHT,
    secondary: '#cccccc',
    border: BLACK,
  },
  body: WHITE,
  overlay: BLACK_OVERLAY,
  table: {
    text: BLACK,
    border: BLACK,
    alternate: '#a1b4d4',
    hover: BLUE_SKY_LIGHT,
  },
  card: {
    background: WHITE,
    color: BLACK,
    shadow: BLACK_SHADOW,
  },
  star: BLUE_SKY,
  detail: {
    background: WHITE,
    title: WHITE,
    body: BLACK,
  },
  modal: {
    title: RED,
    header: RED_LIGHT,
    body: WHITE,
    button: RED,
    text: BLACK,
  },
};

export const darkTheme = {
  text: {
    primary: WHITE,
    secondary: WHITE,
  },
  navigator: {
    primary: BLUE_SKY_DARK,
    secondary: BLUE_SKY_LIGHT,
  },
  button: {
    primary: BLUE_SKY_LIGHT,
    secondary: GREY_LIGHT,
    border: WHITE,
  },
  body: BLACK_LIGHT,
  overlay: BLACK_OVERLAY,
  table: {
    text: WHITE,
    border: WHITE,
    alternate: BLACK_OPACITY,
    hover: BLUE_SKY_LIGHT,
  },
  card: {
    background: WHITE,
    color: BLACK,
    shadow: BLACK_OPACITY,
  },
  star: BLUE_SKY,
  detail: {
    background: WHITE,
    title: WHITE,
    body: BLACK,
  },
  modal: {
    title: RED,
    header: RED_LIGHT,
    body: WHITE,
    button: RED,
    text: BLACK,
  },
};
