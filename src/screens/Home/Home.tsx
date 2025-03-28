import React, {useMemo, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {createStyles} from './styles';
import {setLanguage} from '../../redux/slices/languageSlice';
import {toggleTheme} from '../../redux/slices/themeSlice';
import {useAppDispatch, useAppTranslation, useTheme} from '../../hooks/hooks';
import images from '../../constants/images';
import {VectorIcons} from '../../constants/vectorIcons';

function Home() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);
  const dispatch = useAppDispatch();
  const {t} = useAppTranslation();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
    setShowLangDropdown(false);
  };

  const toggleAppTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconRow}>
        {/* Language Dropdown */}
        <View style={{position: 'relative'}}>
          <TouchableOpacity
            onPress={() => setShowLangDropdown(prev => !prev)}
            style={styles.iconButton}>
            <VectorIcons.Feather
              name="globe"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>

          {showLangDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => changeLanguage('en')}>
                <Text numberOfLines={1} style={styles.dropdownItem}>
                  English
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeLanguage('ur')}>
                <Text numberOfLines={1} style={styles.dropdownItem}>
                  اردو
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeLanguage('fr')}>
                <Text numberOfLines={1} style={styles.dropdownItem}>
                  Français
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Theme Toggle */}
        <TouchableOpacity onPress={toggleAppTheme} style={styles.iconButton}>
          <VectorIcons.Feather
            name={theme.currentTheme === 'dark' ? 'sun' : 'moon'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View style={styles.textRow}>
          <Image source={images.mainLogo} style={styles.image} />
          <Text style={styles.text}>{t('welcomMsg')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
