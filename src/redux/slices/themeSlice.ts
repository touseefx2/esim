// src/redux/slices/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themes, ThemeType } from "../../theme/themeTypes";
import { RootState } from "../store";

export interface ThemeState {
  currentTheme: ThemeType;
  colors: typeof themes.light; // Default theme
}

const initialState: ThemeState = {
  currentTheme: "light", // Default theme
  colors: themes.light, // Default colors
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // setTheme: (state, action: PayloadAction<ThemeType>) => {
    //   state.currentTheme = action.payload;
    //   state.colors = themes[action.payload];
    // },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
      state.colors = themes[action.payload]; // ✅ Correct way
    },
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
      state.colors = themes[state.currentTheme];
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState): ThemeState => state.theme;

export default themeSlice.reducer;
