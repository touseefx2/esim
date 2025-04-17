import { StyleSheet } from "react-native";
import { ThemeState } from "../../redux/slices/themeSlice"; // Import full ThemeState
import { CustomFonts, FontSize } from "../../constants/typography";

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
    image: {
      width: "65%",
      height: "68%",
      resizeMode: "contain",
    },
    text: {
      fontSize: FontSize.size26,
      fontFamily: CustomFonts.medium,
      marginBottom: 20,
      color: theme.colors.text,
    },
  });
