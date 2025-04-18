import React, { useEffect, useMemo, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "../../hooks/hooks";
import images from "../../constants/images";

function Splash() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(-300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // 👈 Fade animation

  useEffect(() => {
    initAnimation();
  }, []);

  const initAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
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
            ? images.splashBlack1
            : images.splashWhite1
        }
        style={[
          styles.image,
          {
            opacity: fadeAnim2,
            transform: [{ rotate: spin }],
          },
        ]}
      />

      <Animated.Image
        source={
          theme.currentTheme === "light"
            ? images.splashBlack2
            : images.splashWhite2
        }
        style={[
          styles.image2,
          {
            opacity: fadeAnim,
          },
        ]}
      />
    </View>
  );
}

export default Splash;
