import { Keyboard } from "react-native";
import { signupProps } from "../types/AppInterfaceTypes";
import { useCallback, useState } from "react";

export const useSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPswd = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  const handleSignup = async (values: signupProps) => {
    Keyboard.dismiss();
  };

  return {
    showPassword,
    toggleShowPswd,
    handleSignup,
  };
};
