import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  language: languageReducer,
});

export default rootReducer;
