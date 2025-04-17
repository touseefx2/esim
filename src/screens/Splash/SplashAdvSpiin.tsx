import React, { useEffect, useMemo, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "../../hooks/hooks";
import images from "../../constants/images";

function Splash() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    initAnimation();
  }, []);

  const initAnimation = () => {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={
          theme.currentTheme === "light"
            ? images.splashBlack
            : images.splashWhite
        }
        style={[
          styles.image,
          {
            transform: [{ translateY: translateYAnim }, { rotate: spin }],
          },
        ]}
      />
    </View>
  );
}

export default Splash;
