import { Dimensions, Platform, StatusBar } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
// import DeviceInfo from 'react-native-device-info';

export const window = {
  Width: Dimensions.get('window').width,
  Height: Dimensions.get('window').height,
  // isTV: Platform.isPad || DeviceInfo.isTablet() || Platform.isTV,
  STATUSBAR_HEIGHT:
    Platform.OS === 'android' && !Platform.isTV
      ? StatusBar.currentHeight ?? responsiveFontSize(3.5)
      : responsiveFontSize(3.5),
  APPBAR_HEIGHT:
    Platform.OS === 'ios' ? responsiveHeight(6.1) : responsiveHeight(7.7),
};
