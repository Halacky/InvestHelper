import React from 'react';
import { FAB, ScreenContainer} from '@draftbit/ui';
import { StatusBar, StyleSheet, View } from 'react-native';
import styles from '../Styles/styles';

const SettingsScreen = props => {

  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View
        style={styles.ViewTopBar}
        pointerEvents="auto"
      >
        <FAB
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          iconSize={32}
          iconName="MaterialIcons/arrow-back"
        />
      </View>
      <View style={styles.ViewMainContent} pointerEvents="auto">
        {/* DONT TOUCH UPPER */}
        {/* PASTE CONTENT AFTER THIS */}
      </View>
    </ScreenContainer>
  );
};

export default SettingsScreen;