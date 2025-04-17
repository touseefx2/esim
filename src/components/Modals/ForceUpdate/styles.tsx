import { StyleSheet } from "react-native";
import { ThemeState } from "../../../redux/slices/themeSlice";
import { CustomFonts, FontSize } from "../../../constants/typography";

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      padding: 24,
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      width: "90%",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    textRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      marginBottom: 30,
    },
    image: {
      width: 35,
      height: 35,
      resizeMode: "contain",
      borderRadius: 5,
    },
    title: {
      fontSize: FontSize.size22,
      fontFamily: CustomFonts.bold,
      color: theme.colors.text,
    },
    message: {
      fontSize: FontSize.size15,
      textAlign: "center",
      color: theme.colors.subText,
      marginBottom: 30,
      fontFamily: CustomFonts.regular,
    },
    skipText: {
      color: theme.colors.subText,
      textDecorationColor: theme.colors.subText,
      fontSize: FontSize.size15,
      fontFamily: CustomFonts.regular,
      textDecorationLine: "underline",
      marginTop: 15,
    },
  });
