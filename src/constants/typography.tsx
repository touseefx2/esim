import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 375;

// Responsive Font Size Function
const RF = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Font Sizes
export const FontSize = {
  size11: RF(11),
  size12: RF(12),
  size13: RF(13),
  size14: RF(14),
  size15: RF(15),
  size16: RF(16),
  size18: RF(18),
  size22: RF(22),
  size24: RF(24),
  size26: RF(26),
  size28: RF(28),
};

// Font Family
// export const CustomFonts = {
//   regular: "Poppins-Regular",
//   medium: "Poppins-Medium",
//   semiBold: "Poppins-SemiBold",
//   bold: "Poppins-Bold",
// };

export const CustomFonts = {
  regular: "Inter_18pt-Regular",
  medium: "Inter_18pt-Medium",
  semiBold: "Inter_18pt-SemiBold",
  bold: "Inter_18pt-Bold",
  regularIBM: "IBMPlexSansArabic-Regular",
};
