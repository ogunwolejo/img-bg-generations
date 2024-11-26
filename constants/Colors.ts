/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const common: {[p: string]: string} = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
  primary: "#5D81FD",
  error: "#FF6B6B",
  translucent: "#F5F9FE",
  primaryShad1: "#2A4ECA",
  primaryShad2: "#D6DFFF",
  houseGray: "#61677D",
  gray1: "#C8D2DE",
  inputPlaceholder: "#727272",
  text1: "#262626",
  blueText: "#3461FD",
};

export const Colors = {
  light: {
    ...common,
    text: '#11181C',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    background: "#3B4054",
    
  },
  dark: {
    ...common,
    text: '#ECEDEE',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    background: "#3B4054",
  },
};
