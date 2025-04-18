import React, { FC, useEffect, useMemo, useRef, useState, memo } from "react";
import { View, TextInput, Text, Animated, StyleSheet } from "react-native";
import { useTheme } from "../hooks/hooks";
import { InputFieldProps } from "../types/AppInterfaceTypes";
import { CustomFonts, FontSize } from "../constants/typography";
import { ThemeState } from "../redux/slices/themeSlice";

const InputField: FC<InputFieldProps> = ({
  label = "",
  placeholder = "",
  value = "",
  handleBlur,
  handleChange,
  keyName = "",
  isErr = false,
  errMsg = "",
  icon,
  icon2,
  secureTextEntry = false,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);

  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  return (
    <View style={styles.mainInputContainer}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isErr
              ? theme.colors.inputErrText
              : theme.colors.inputBorder,
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.label,
            {
              top: animatedLabel.interpolate({
                inputRange: [0, 1],
                outputRange: [17, -8], // <-- this value ensures vertical centering
              }),
              fontSize: animatedLabel.interpolate({
                inputRange: [0, 1],
                outputRange: [FontSize.size14, FontSize.size12],
              }),
            },
          ]}
        >
          {label}
        </Animated.Text>
        {icon && icon}
        <TextInput
          style={[
            styles.input,
            {
              width:
                icon && icon2
                  ? "81%"
                  : (icon && !icon2) || (!icon && icon2)
                  ? "91%"
                  : "100%",
            },
          ]}
          keyboardType={
            keyName === "phone"
              ? "phone-pad"
              : keyName === "email"
              ? "email-address"
              : "default"
          }
          onChangeText={handleChange}
          onBlur={(e) => {
            handleBlur && handleBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        {icon2 && icon2}
      </View>
      {isErr && <Text style={styles.errText}>{errMsg}</Text>}
    </View>
  );
};

export default memo(InputField);

const createStyles = (theme: ThemeState) =>
  StyleSheet.create({
    mainInputContainer: {
      marginBottom: 20,
    },
    inputContainer: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      position: "absolute",
      left: 15,
      color: theme.colors.inputLabelText,
      backgroundColor: theme.colors.background,
      fontFamily: CustomFonts.regular,
      paddingHorizontal: 2,
    },
    input: {
      fontSize: FontSize.size13,
      paddingVertical: 17,
      color: theme.colors.text,
      fontFamily: CustomFonts.medium,
    },
    errText: {
      fontSize: FontSize.size11,
      marginTop: 2,
      fontFamily: CustomFonts.regular,
      color: theme.colors.inputErrText,
    },
  });
