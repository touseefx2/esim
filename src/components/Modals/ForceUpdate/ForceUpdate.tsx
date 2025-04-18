import React, { useMemo, memo, useCallback } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import RNExitApp from "react-native-exit-app";
import { useTheme, useAppTranslation } from "../../../hooks/hooks";
import { createStyles } from "./styles";
import { touchOpacity } from "../../../constants/vectorIcons";
import images from "../../../constants/images";
import GradientButton from "../../GradientButton";
import { ForceUpdateProps } from "../../../types/AppInterfaceTypes";

const ForceUpdate: React.FC<ForceUpdateProps> = ({
  isModal,
  updateUrl,
  isForce,
  closeModal,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { t } = useAppTranslation();

  const handleUpdate = useCallback(async () => {
    try {
      await Linking.openURL(updateUrl);
      RNExitApp.exitApp();
    } catch (error) {
      console.log("handleUpdate Err : ", error);
    }
  }, []);

  return (
    <Modal
      visible={isModal}
      transparent={true}
      animationType="fade"
      onRequestClose={!isForce ? closeModal : undefined}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.textRow}>
            <Image source={images.mainLogo} style={styles.image} />
            <Text style={styles.title}>{t("updateReq")}</Text>
          </View>
          <Text style={styles.message}>{t("updateMsg")}</Text>
          <GradientButton title={t("updateNow")} onPress={handleUpdate} />
          {!isForce && (
            <TouchableOpacity activeOpacity={touchOpacity} onPress={closeModal}>
              <Text style={styles.skipText}>{t("skip")}</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default memo(ForceUpdate);
