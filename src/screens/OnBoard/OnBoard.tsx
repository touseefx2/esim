import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { createStyles } from "./styles";
import { useAppTranslation, useTheme } from "../../hooks/hooks";
import StatusBarWrapper from "../../components/StatusBarWrapper";
import svg from "../../constants/svg";
import { touchOpacity } from "../../constants/vectorIcons";
import GradientButton from "../../components/GradientButton";
import routes from "../../constants/routes";
import { useOnboardingData } from "../../constants/data";

function OnBoard(props: any) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { t } = useAppTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onboardingData = useOnboardingData();

  const isLast = currentIndex === onboardingData.length - 1;

  return (
    <LinearGradient
      colors={[theme.colors.button, theme.colors.button2]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.linear}
    >
      <StatusBarWrapper
        backgroundColor={theme.colors.button}
        barStyle={"light-content"}
      />

      <SvgXml style={styles.logo} xml={svg.icons.onBoardingLog} />

      <View style={styles.container}>
        <View style={styles.mainContainerShadow} />
        <View style={styles.mainContainer}>
          <View style={styles.content}>
            <SvgXml
              xml={onboardingData[currentIndex].icon}
              style={styles.itemLogo}
            />
            <Text style={styles.itemText}>
              {onboardingData[currentIndex].title}
            </Text>
            <Text style={styles.itemSubText}>
              {onboardingData[currentIndex].subtitle}
            </Text>

            {/* Pagination Dots */}
            <View style={styles.dotsWrapper}>
              {onboardingData.map((_, index) => (
                <LinearGradient
                  key={index}
                  style={styles.dot}
                  colors={
                    index === currentIndex
                      ? [theme.colors.button, theme.colors.button2]
                      : ["#F3F3F3", "#F3F3F3"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionContainer}>
            <GradientButton
              styl={{ width: "100%" }}
              style={styles.mainButton}
              title={
                currentIndex === onboardingData.length - 1
                  ? t("next")
                  : t("skip")
              }
              onPress={() => {
                isLast
                  ? props.navigation.replace(routes.Home)
                  : setCurrentIndex((prevIndex) => prevIndex + 1);
              }}
            />

            <TouchableOpacity
              disabled={!isLast}
              onPress={() => props.navigation.navigate(routes.Signup)}
              activeOpacity={touchOpacity}
              style={
                !isLast ? styles.secondaryButtonHide : styles.secondaryButton
              }
            >
              <Text style={styles.secondaryButtonText}>
                {isLast ? t("newUserReg") : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OnBoard;
