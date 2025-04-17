import {StyleSheet} from 'react-native';
import {ThemeState} from '../../redux/slices/themeSlice'; // Import full ThemeState
import {CustomFonts, FontSize} from '../../constants/typography';

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 15,
      backgroundColor: theme.colors.background, // Dynamic color
    },
    text: {
      fontSize: FontSize.size26,
      fontFamily: CustomFonts.medium, // Dynamic font
      color: theme.colors.text, // Dynamic color
    },
  });
