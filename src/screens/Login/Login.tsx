import React, { useMemo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { Formik } from "formik";
import { createStyles } from "./styles";
import { useAppTranslation, useTheme } from "../../hooks/hooks";
import StatusBarWrapper from "../../components/StatusBarWrapper";
import svg from "../../constants/svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getLoginSchema } from "../../types/schemas";
import InputField from "../../components/InputField";
import GradientButton from "../../components/GradientButton";
import { touchOpacity } from "../../constants/vectorIcons";
import { useLogin } from "../../hooks/useLogin";
import { useSocial } from "../../hooks/useSocial";

function Login(props: any) {
  const theme = useTheme();
  const { t } = useAppTranslation();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { showPassword, toggleShowPswd, handleLogin, handleForgotPassword } =
    useLogin();
  const { handleGoogle, handleAppStore } = useSocial();
  const initialValues = { email: "", password: "" };

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
          <KeyboardAwareScrollView
            style={styles.content}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>{t("loginTitle")}</Text>
            <Text style={styles.subtitle}>{t("loginSubtitle")}</Text>

            <Formik
              initialValues={initialValues}
              validationSchema={getLoginSchema(t)}
              onSubmit={handleLogin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                touched,
              }) => {
                // const isDisabled =
                //   areAllValuesNotEmpty(values) && !Object.keys(errors).length
                //     ? false
                //     : true;
                return (
                  <View>
                    <InputField
                      label={t("email")}
                      value={values.email}
                      keyName="email"
                      handleBlur={handleBlur("email")}
                      handleChange={handleChange("email")}
                      isErr={touched.email && errors.email ? true : false}
                      errMsg={touched.email && errors.email ? errors.email : ""}
                    />

                    <InputField
                      label={t("password")}
                      value={values.password}
                      keyName="password"
                      handleBlur={handleBlur("password")}
                      handleChange={handleChange("password")}
                      icon2={
                        <TouchableOpacity
                          activeOpacity={touchOpacity}
                          style={styles.eyeIcon}
                          onPress={toggleShowPswd}
                        >
                          <SvgXml
                            xml={
                              !showPassword ? svg.icons.eye : svg.icons.hideEye
                            }
                          />
                        </TouchableOpacity>
                      }
                      isErr={touched.password && errors.password ? true : false}
                      errMsg={
                        touched.password && errors.password
                          ? errors.password
                          : ""
                      }
                      secureTextEntry={!showPassword}
                    />

                    <TouchableOpacity
                      activeOpacity={touchOpacity}
                      style={styles.forgotPassword}
                      onPress={handleForgotPassword}
                    >
                      <Text style={styles.forgotText}>
                        {t("forgotYourPass")}
                      </Text>
                    </TouchableOpacity>

                    <GradientButton
                      onPress={handleSubmit}
                      style={styles.loginButton}
                      title={t("login")}
                    />
                  </View>
                );
              }}
            </Formik>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.orText}>{t("orSignInUsing")}</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity
                activeOpacity={touchOpacity}
                style={styles.socialButton}
                onPress={handleGoogle}
              >
                <SvgXml xml={svg.icons.google} width={24} height={24} />
                <Text style={styles.socialText}>{t("google")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={touchOpacity}
                style={styles.socialButton}
                onPress={handleAppStore}
              >
                <SvgXml
                  xml={svg.icons.appStore}
                  width={24}
                  height={24}
                  color={
                    theme.currentTheme == "light"
                      ? theme.colors.title
                      : theme.colors.background
                  }
                />
                <Text style={styles.socialText}>{t("appStore")}</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login;
