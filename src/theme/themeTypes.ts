export type ThemeType = "light" | "dark" | "blue";

export interface ThemeColors {
  background: string;
  dropDownBack: string;
  dropDownText: string;
  title: string;
  text: string;
  subText: string;
  button: string;
  button2: string;
  buttonText: string;
  inputErrText: string;
  inputLabelText: string;
  inputBorder: string;
  dividerLine: string;
  statusBarStyle: "default" | "light-content" | "dark-content";
}

export const themes: Record<ThemeType, ThemeColors> = {
  light: {
    background: "#FFFFFF",
    dropDownBack: "#F0F0F3",
    dropDownText: "#1C1C1E",
    title: "black",
    text: "#1B132A",
    subText: "#7A7A7A",
    button: "#3EBCA2",
    button2: "#95D4C7",
    buttonText: "#FFFFFF",
    inputErrText: "#ed5a5a",
    inputLabelText: "#989898",
    inputBorder: "#ECECEC",
    dividerLine: "#DEDEDE",
    statusBarStyle: "dark-content",
  },
  dark: {
    background: "#121212",
    dropDownBack: "#1E1E1E",
    dropDownText: "#FFFFFF",
    title: "#FFFFFF",
    text: "#E0E0E0",
    subText: "#A0A0A0",
    button: "#3EBCA2",
    button2: "#2C9984",
    buttonText: "#FFFFFF",
    inputErrText: "red",
    inputLabelText: "#989898",
    inputBorder: "#ECECEC",
    dividerLine: "#DEDEDE",
    statusBarStyle: "light-content",
  },
  blue: {
    background: "#F0F4FF",
    dropDownBack: "#D6E4FF",
    dropDownText: "#1B1F3B",
    title: "#1B1F3B",
    text: "#2B3553",
    subText: "#6C7A99",
    button: "#4D7CFE",
    button2: "#8FA7FF",
    buttonText: "#FFFFFF",
    inputErrText: "red",
    inputLabelText: "#989898",
    inputBorder: "#ECECEC",
    dividerLine: "#DEDEDE",
    statusBarStyle: "dark-content",
  },
};
