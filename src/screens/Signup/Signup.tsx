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
import { getSignupSchema } from "../../types/schemas";
import InputField from "../../components/InputField";
import GradientButton from "../../components/GradientButton";
import { touchOpacity, VectorIcons } from "../../constants/vectorIcons";
import { useSignup } from "../../hooks/useSignup";
import { useSocial } from "../../hooks/useSocial";

function Signup(props: any) {
  const theme = useTheme();
  const { t } = useAppTranslation();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { showPassword, toggleShowPswd, handleSignup } = useSignup();
  const { handleGoogle, handleAppStore } = useSocial();
  const initialValues = {
    email: "",
    phone: "",
    password: "",
    isTerms: false,
  };

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
            <Text style={styles.title}>{t("signupTitle")}</Text>
            <Text style={styles.subtitle}>{t("signupSubtitle")}</Text>

            <Formik
              initialValues={initialValues}
              validationSchema={getSignupSchema(t)}
              onSubmit={handleSignup}
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
                      label={t("emailAddress")}
                      value={values.email}
                      keyName={"email"}
                      handleBlur={handleBlur("email")}
                      handleChange={handleChange("email")}
                      isErr={touched.email && errors.email ? true : false}
                      errMsg={touched.email && errors.email ? errors.email : ""}
                    />

                    <InputField
                      label={t("phoneNum")}
                      value={values.phone}
                      keyName={"phone"}
                      handleBlur={handleBlur("phone")}
                      handleChange={handleChange("phone")}
                      isErr={touched.phone && errors.phone ? true : false}
                      errMsg={touched.phone && errors.phone ? errors.phone : ""}
                    />

                    <InputField
                      label={t("password")}
                      value={values.password}
                      keyName={"password"}
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

                    <View style={styles.agreeTerms}>
                      <Text style={styles.termsText}>
                        {t("clickCreateAccount")}
                      </Text>
                      <View style={styles.termsRow}>
                        <TouchableOpacity
                          activeOpacity={touchOpacity}
                          onPress={() =>
                            setFieldValue("isTerms", !values.isTerms)
                          }
                          style={[
                            styles.radioBox,
                            {
                              backgroundColor: values.isTerms
                                ? theme.colors.button
                                : theme.colors.background,
                            },
                          ]}
                        >
                          {values.isTerms && (
                            <VectorIcons.Entypo
                              name="check"
                              size={9}
                              color={theme.colors.background}
                            />
                          )}
                        </TouchableOpacity>
                        <Text style={styles.termsText}>{t("agreeTerms")}</Text>
                      </View>
                      {errors.isTerms && (
                        <Text style={styles.errText}>{errors.isTerms}</Text>
                      )}
                    </View>

                    <GradientButton
                      onPress={handleSubmit}
                      style={styles.signupButton}
                      title={t("createAccount")}
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
                <SvgXml xml={svg.icons.appStore} width={24} height={24} />
                <Text style={styles.socialText}>{t("appStore")}</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Signup;
