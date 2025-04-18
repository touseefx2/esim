import SystemNavigationBar from "react-native-system-navigation-bar";

export const setNavigationBarColor = (currentTheme: String) => {
  SystemNavigationBar.setNavigationColor(
    currentTheme !== "light" ? "black" : "white",
    currentTheme !== "light" ? "light" : "dark",
    "both"
  );
};

export function areAllValuesNotEmpty(values: object) {
  return Object.values(values).every((value) => value.trim() !== "");
}
