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
      width: "10%",
      paddingVertical: 5,
      alignItems: "flex-end",
    },
    agreeTerms: {
      marginBottom: 12,
      marginTop: 10,
    },
    termsText: {
      color: theme.colors.text,
      fontSize: FontSize.size12,
      fontFamily: CustomFonts.regular,
    },
    termsRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
      gap: 7,
    },
    radioBox: {
      width: 14,
      height: 14,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: theme.colors.title,
      alignItems: "center",
      justifyContent: "center",
    },
    signupButton: {
      alignItems: "center",
      marginBottom: 20,
      width: "100%",
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
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
      marginBottom: 20,
    },
    socialButton: {
      width: "46%",
      paddingVertical: 14,
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
    errText: {
      fontSize: FontSize.size11,
      marginTop: 2,
      fontFamily: CustomFonts.regular,
      color: theme.colors.inputErrText,
    },
  });
