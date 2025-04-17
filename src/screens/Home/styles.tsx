import { StyleSheet } from "react-native";
import { ThemeState } from "../../redux/slices/themeSlice"; // Import full ThemeState
import { CustomFonts, FontSize } from "../../constants/typography";

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: theme.colors.background,
    },
    container2: {
      flex: 1,
      justifyContent: "center",
    },
    textRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },
    image: {
      width: 65,
      height: 70,
      resizeMode: "contain",
    },
    text: {
      fontSize: FontSize.size26,
      fontFamily: CustomFonts.medium,
      color: theme.colors.text,
      maxWidth: "78%",
    },
    iconRow2: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      justifyContent: "flex-end",
      top: 20,
    },
    iconButton: {
      padding: 8,
    },
    dropdown: {
      position: "absolute",
      top: 35,
      right: 0,
      borderRadius: 12,
      padding: 5,
      zIndex: 999,
      width: 100,
      backgroundColor: theme.colors.dropDownBack,
    },
    dropdownItem: {
      padding: 8,
      color: theme.colors.dropDownText,
    },
  });
