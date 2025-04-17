import { StyleSheet } from "react-native";
import { ThemeState } from "../../redux/slices/themeSlice"; // Import full ThemeState
import { CustomFonts, FontSize } from "../../constants/typography";
import { window } from "../../theme/window";

export const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    linear: {
      flex: 1,
    },
    logo: {
      alignSelf: "center",
      top: "7.5%",
    },
    container: {
      flex: 1,
      justifyContent: "flex-end",
    },
    mainContainerShadow: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      height: "88%",
      width: "90%",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      position: "absolute",
      zIndex: 1,
      alignSelf: "center",
    },
    mainContainer: {
      backgroundColor: theme.colors.background,
      // padding: 15,
      height: "85%",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      zIndex: 2,
    },
    content: {
      flex: 1,
    },
    scrollContent: {
      padding: 18,
    },
    title: {
      fontSize: FontSize.size24,
      fontFamily: CustomFonts.bold,
      color: theme.colors.text,
      textAlign: "center",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: FontSize.size14,
      color: theme.colors.subText,
      textAlign: "center",
      marginBottom: 42,
      fontFamily: CustomFonts.regular,
    },
    inputBox: {
      backgroundColor: "#F6F6F6",
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: "#1D1D1D",
    },
    eyeIcon: {
      paddingLeft: 8,
    },
    forgotPassword: {
      marginBottom: 32,
    },
    forgotText: {
      color: theme.colors.text,
      fontSize: FontSize.size12,
      fontFamily: CustomFonts.medium,
    },
    loginButton: {
      paddingVertical: 14,
      alignItems: "center",
      marginBottom: 22,
      width: "100%",
    },
    loginText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 22,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: theme.colors.dividerLine,
    },
    orText: {
      marginHorizontal: 10,
      color: theme.colors.subText,
      fontFamily: CustomFonts.regular,
      fontSize: FontSize.size12,
    },
    socialRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 22,
    },
    socialButton: {
      width: "46%",
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.inputBorder,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 10,
    },
    socialText: {
      fontSize: FontSize.size16,
      fontFamily: CustomFonts.regularIBM,
      color: theme.colors.text,
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginBottom: 8,
    },
  });
