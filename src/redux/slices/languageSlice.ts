import {createSlice} from '@reduxjs/toolkit';
import i18n from '../../localization/i18n';
import {RootState} from '../store';

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: i18n.language,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      // Don't change i18n here - handle it in App component
    },
  },
});

export const {setLanguage} = languageSlice.actions;
export const selectLanguage = (state: RootState): string =>
  state.language.language;

export default languageSlice.reducer;
