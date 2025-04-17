import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

type FloatingLabelInputProps = TextInputProps & {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  toggleSecureEntry?: () => void;
};

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  secure = false,
  toggleSecureEntry,
  ...props
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -8],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: "#999",
    backgroundColor: "#fff",
    paddingHorizontal: 4,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        value={value}
        secureTextEntry={secure}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
      {toggleSecureEntry && (
        <TouchableOpacity style={styles.eyeIcon} onPress={toggleSecureEntry}>
          {/* Insert Feather or MaterialCommunityIcons here */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FloatingLabelInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingTop: 14,
    paddingHorizontal: 16,
    height: 56,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 16,
    color: "#333",
    height: "100%",
    paddingTop: 8,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 18,
  },
});
