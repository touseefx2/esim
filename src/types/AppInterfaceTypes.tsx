import { JSX } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChange?: (text: string) => void;
  keyName?: string;
  isErr?: boolean;
  errMsg?: string;
  icon?: JSX.Element;
  icon2?: JSX.Element;
  secureTextEntry?: boolean;
  styles?: any;
}
