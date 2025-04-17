import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { createStyles } from "./styles";
import { useAppTranslation, useTheme } from "../../hooks/hooks";

function Signup() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { t } = useAppTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("signup")}</Text>
    </View>
  );
}

export default Signup;
