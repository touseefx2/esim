import React, { memo } from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useTheme } from "../hooks/hooks";

interface StatusBarWrapperProps {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
}

const StatusBarWrapper: React.FC<StatusBarWrapperProps> = ({
  backgroundColor,
  barStyle,
}) => {
  const theme = useTheme();

  return (
    <StatusBar
      backgroundColor={backgroundColor ?? theme.colors.background}
      barStyle={barStyle ?? (theme.colors.statusBarStyle as StatusBarStyle)}
    />
  );
};

export default memo(StatusBarWrapper);
