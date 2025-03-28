import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import type {RootState, AppDispatch} from '../redux/store'; // Import your store types
import {selectTheme} from '../redux/slices/themeSlice';
import {selectLanguage} from '../redux/slices/languageSlice';
import {useEffect, useState} from 'react';

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTheme = () => {
  return useSelector(selectTheme);
};
export const useAppTranslation = () => {
  const {t, i18n} = useTranslation();
  const currentLanguage = useAppSelector(selectLanguage);

  // Add this to force re-render when language changes
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => {
      setUpdateKey(prev => prev + 1);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return {t, i18n, key: updateKey};
};
