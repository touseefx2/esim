import React, { useMemo, memo } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { touchOpacity } from "../constants/vectorIcons";
import { useTheme } from "../hooks/hooks";
import { ThemeState } from "../redux/slices/themeSlice";
import { CustomFonts, FontSize } from "../constants/typography";
import { GradientButtonProps } from "../types/AppInterfaceTypes";

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  colors,
  styl,
  style,
  contentStyle,
  textStyle,
  touchOpacityy = touchOpacity,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const gradientColors = colors ?? [theme.colors.button, theme.colors.button2];

  return (
    <TouchableOpacity
      style={styl}
      activeOpacity={touchOpacityy}
      onPress={onPress}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, style]}
      >
        <View style={[styles.buttonContent, contentStyle]}>
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(GradientButton);

const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      overflow: "hidden",
      alignSelf: "center",
    },
    buttonContent: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.buttonText,
      fontSize: FontSize.size16,
      fontFamily: CustomFonts.bold,
    },
  });
