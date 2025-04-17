import React, { useEffect, useMemo, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "../../hooks/hooks";
import images from "../../constants/images";

function Splash() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    initSpin();
  }, []);

  const initSpin = () => {
    setTimeout(() => {
      Animated.timing(rotateAnim, {
        toValue: 1, // 1 full spin only
        duration: 1200, // spin over 2 seconds
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 300);
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
        style={[styles.image, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
}

export default Splash;
