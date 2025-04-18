import { JSX } from "react";
import {
  NativeSyntheticEvent,
  StatusBarStyle,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface StatusBarWrapperProps {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
}

export interface ForceUpdateProps {
  isModal: boolean;
  updateUrl: string;
  isForce: boolean;
  closeModal: () => void;
}

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

export interface GradientButtonProps {
  title: string;
  onPress?: () => void;
  colors?: string[];
  styl?: ViewStyle;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  textStyle?: TextStyle;
  touchOpacityy?: number;
}

export interface loginProps {
  email: string;
  password: string;
}

export interface signupProps {
  email: string;
  phone: string;
  password: string;
  isTerms: boolean;
}
