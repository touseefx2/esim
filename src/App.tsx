import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import { useAppSelector, useAppTranslation, useTheme } from "./hooks/hooks";
import { selectLanguage } from "./redux/slices/languageSlice";
import { I18nManager } from "react-native";
import StatusBarWrapper from "./components/StatusBarWrapper";
import { Splash } from "./screens";
import { setNavigationBarColor } from "./utils/functions";

function App(): React.JSX.Element {
  const theme = useTheme();
  const { i18n } = useAppTranslation();
  const language = useAppSelector(selectLanguage);
  const [appReady, setAppReady] = useState(false);
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    setNavigationBarColor(theme.currentTheme);
  }, [theme.currentTheme]);

  useEffect(() => {
    updateLayout();
  }, [language]);

  const initialize = async () => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  };

  const updateLayout = async () => {
    try {
      await i18n.changeLanguage(language);
      const isRTL = language === "ur";
      I18nManager.forceRTL(isRTL);
      // Force component remount if u don't want restart
      setAppReady((prev) => !prev);
    } catch (error) {
      console.error("❌ Language change failed:", error);
    }
  };

  return (
    <NavigationContainer key={appReady ? "rtl" : "ltr"}>
      <StatusBarWrapper />
      {isSplash ? <Splash /> : <MainNavigator />}
    </NavigationContainer>
  );
}

export default App;
