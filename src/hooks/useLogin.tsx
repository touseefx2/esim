import { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { loginProps } from "../types/AppInterfaceTypes";

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPswd = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  const handleForgotPassword = async () => {};
  const handleLogin = async (values: loginProps) => {
    Keyboard.dismiss();
  };

  return {
    showPassword,
    toggleShowPswd,
    handleLogin,
    handleForgotPassword,
  };
};
