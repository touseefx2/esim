import SystemNavigationBar from 'react-native-system-navigation-bar';

export const setNavigationBarColor = (currentTheme: String) => {
  console.log('currentTheme: ', currentTheme);
  SystemNavigationBar.setNavigationColor(
    currentTheme !== 'light' ? 'black' : 'white',
    currentTheme !== 'light' ? 'light' : 'dark',
    'both',
  );
};
