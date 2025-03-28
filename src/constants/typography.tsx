import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

// Responsive Font Size Function
const RF = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Font Sizes
export const FontSize = {
  size12: RF(12),
  size14: RF(14),
  size16: RF(16),
  size18: RF(18),
  size22: RF(22),
  size26: RF(26),
  size28: RF(28),
};

// Font Family
export const CustomFonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};
