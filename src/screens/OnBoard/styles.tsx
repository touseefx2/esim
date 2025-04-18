import { StyleSheet } from "react-native";
import { ThemeState } from "../../redux/slices/themeSlice"; // Import full ThemeState
import { CustomFonts, FontSize } from "../../constants/typography";

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    linear: {
      flex: 1,
    },
    logo: {
      alignSelf: "center",
      top: "6%",
    },
    container: {
      flex: 1,
      justifyContent: "flex-end",
    },
    mainContainer: {
      backgroundColor: theme.colors.background,
      padding: 15,
      height: "88%",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      zIndex: 2,
    },
    mainContainerShadow: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      height: "90%",
      width: "90%",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      position: "absolute",
      zIndex: 1,
      alignSelf: "center",
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    itemLogo: {
      alignSelf: "center",
    },
    itemText: {
      fontSize: FontSize.size24,
      fontFamily: CustomFonts.bold,
      color: theme.colors.text,
      textAlign: "center",
      marginTop: 10,
      maxWidth: "95%",
    },
    itemSubText: {
      fontSize: FontSize.size14,
      fontFamily: CustomFonts.regular,
      color: theme.colors.subText,
      textAlign: "center",
      marginTop: 10,
      maxWidth: "95%",
    },
    dotsWrapper: {
      width: "90%",
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 40,
    },
    dot: {
      height: 5,
      width: "31%",
      borderRadius: 10,
    },
    actionContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    mainButton: {
      width: "90%",
    },
    mainButtonText: {
      fontSize: FontSize.size16,
      fontFamily: CustomFonts.bold,
      color: theme.colors.buttonText,
      textAlign: "center",
    },
    secondaryButton: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      width: "90%",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderWidth: 1,
      borderColor: theme.colors.button,
      marginTop: 15,
    },
    secondaryButtonHide: {
      backgroundColor: "transparent",
      borderRadius: 8,
      width: "90%",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderWidth: 1,
      borderColor: "transparent",
      marginTop: 15,
    },
    secondaryButtonText: {
      fontSize: FontSize.size14,
      fontFamily: CustomFonts.regular,
      color: theme.colors.title,
      textAlign: "center",
    },
  });
