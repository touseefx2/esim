import React, {useMemo} from 'react';
import {View, Image} from 'react-native';
import {createStyles} from './styles';
import {useTheme} from '../../hooks/hooks';
import images from '../../constants/images';

function Splash() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.currentTheme]);

  return (
    <View style={styles.container}>
      <Image
        source={
          theme.currentTheme === 'light'
            ? images.splashBlack
            : images.splashWhite
        }
        style={styles.image}
      />
    </View>
  );
}

export default Splash;
