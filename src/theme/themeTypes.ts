export type ThemeType = 'light' | 'dark' | 'blue';

export interface ThemeColors {
  background: string;
  dropDownBack: string;
  dropDownText: string;
  text: string;
  button: string;
  buttonText: string;
  statusBarStyle: 'default' | 'light-content' | 'dark-content';
}

export const themes: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#FFFFFF',
    dropDownBack: '#F0F0F3',
    dropDownText: '#1C1C1E',
    text: '#000000',
    button: '#007AFF',
    buttonText: '#FFFFFF',
    statusBarStyle: 'dark-content',
  },
  dark: {
    background: '#000000',
    dropDownBack: '#1C1C1E',
    dropDownText: '#F5F5F7',
    text: '#FFFFFF',
    button: '#FF9500',
    buttonText: '#000000',
    statusBarStyle: 'light-content',
  },
  blue: {
    background: '#003366',
    dropDownBack: '#F0F0F3',
    dropDownText: '#1C1C1E',
    text: '#FFFFFF',
    button: '#00A2E8',
    buttonText: '#FFFFFF',
    statusBarStyle: 'light-content',
  },
};
