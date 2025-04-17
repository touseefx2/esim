import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import {
  useAppDispatch,
  useAppSelector,
  useAppTranslation,
  useTheme,
} from "./hooks/hooks";
import { selectLanguage } from "./redux/slices/languageSlice";
import { I18nManager, Platform } from "react-native";
import StatusBarWrapper from "./components/StatusBarWrapper";
import { Splash } from "./screens";
import { setNavigationBarColor } from "./utils/functions";
import ForceUpdate from "./components/Modals/ForceUpdate/ForceUpdate";
import { androidAppLink, iosAppLink } from "./constants/env";
// @ts-ignore
import VersionCheck from "react-native-version-check";
import { setTheme } from "./redux/slices/themeSlice";

function App(): React.JSX.Element {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { i18n } = useAppTranslation();
  const language = useAppSelector(selectLanguage);
  const [appReady, setAppReady] = useState(false);
  const [isSplash, setIsSplash] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    setNavigationBarColor(theme.currentTheme);
    dispatch(setTheme(theme.currentTheme));
  }, [theme]);

  useEffect(() => {
    updateLayout();
  }, [language]);

  const initialize = async () => {
    setTimeout(() => {
      checkUpdateNeeded();
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

  const checkUpdateNeeded = async () => {
    // try {
    //   const res = await VersionCheck.needUpdate({
    //     depth: 1,
    //   });
    //   console.log("VersionCheck res: ", res);
    //   setIsUpdate(res?.isNeeded || false);
    // } catch (error) {
    //   console.log("❌ VersionCheck Catch Err: ", error);
    // }
    setIsUpdate(true);
  };

  const closeUpdateModal = useCallback(() => {
    setIsUpdate(false);
  }, []);

  return (
    <NavigationContainer key={appReady ? "rtl" : "ltr"}>
      <StatusBarWrapper />
      {isSplash ? <Splash /> : <MainNavigator />}
      <ForceUpdate
        isModal={isUpdate}
        isForce={false}
        updateUrl={Platform.OS === "android" ? androidAppLink : iosAppLink}
        closeModal={closeUpdateModal}
      />
    </NavigationContainer>
  );
}

export default App;
