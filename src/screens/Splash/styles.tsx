import { StyleSheet } from "react-native";
import { ThemeState } from "../../redux/slices/themeSlice"; // Import full ThemeState

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
      width: 221,
      height: 216,
      marginBottom: 10,
      // resizeMode: "contain",
    },
    image2: {
      width: 243,
      height: 41.7,
      // resizeMode: "contain",
    },
  });
