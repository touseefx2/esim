import React, { useMemo, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { Formik } from "formik";
import { createStyles } from "./styles";
import { useAppTranslation, useTheme } from "../../hooks/hooks";
import StatusBarWrapper from "../../components/StatusBarWrapper";
import svg from "../../constants/svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loginSchema } from "../../types/schemas";
import InputField from "../../components/InputField";
import GradientButton from "../../components/GradientButton";
import { touchOpacity } from "../../constants/vectorIcons";

function Login(props: any) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const { t } = useAppTranslation();
  const initialValues = { email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPswd = () => {
    setShowPassword(!showPassword);
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
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Enter the following details to access your account
            </Text>

            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log("Login data", values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <InputField
                    label={"Email"}
                    placeholder={"email"}
                    keyName={"email"}
                    value={values.email}
                    handleBlur={handleBlur("email")}
                    handleChange={handleChange("email")}
                    isErr={touched.email && errors.email ? true : false}
                    errMsg={touched.email && errors.email ? errors.email : ""}
                  />

                  <InputField
                    label={"Password"}
                    placeholder={"password"}
                    keyName={"password"}
                    value={values.password}
                    handleBlur={handleBlur("password")}
                    handleChange={handleChange("password")}
                    icon2={
                      <TouchableOpacity
                        style={{
                          width: "10%",
                          paddingVertical: !showPassword ? 5 : 10,
                          alignItems: "flex-end",
                        }}
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
                      touched.password && errors.password ? errors.password : ""
                    }
                    secureTextEntry={!showPassword}
                  />

                  <TouchableOpacity
                    activeOpacity={touchOpacity}
                    style={styles.forgotPassword}
                  >
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                  </TouchableOpacity>

                  <GradientButton style={styles.loginButton} title={"Login"} />
                </View>
              )}
            </Formik>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.orText}>Or sign in using</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity
                activeOpacity={touchOpacity}
                style={styles.socialButton}
              >
                <SvgXml xml={svg.icons.google} />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={touchOpacity}
                style={styles.socialButton}
              >
                <SvgXml xml={svg.icons.appStore} />
                <Text style={styles.socialText}>App Store</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login;
