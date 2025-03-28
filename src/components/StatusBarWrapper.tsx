import React, {memo} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../hooks/hooks';

const StatusBarWrapper = () => {
  const theme = useTheme();
  return (
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle={theme.colors.statusBarStyle}
    />
  );
};

export default memo(StatusBarWrapper);
