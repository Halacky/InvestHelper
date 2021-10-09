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

/*const styles = StyleSheet.create({
  ViewTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    backgroundColor: '#12142C',
  },
  ViewMainContent: {
    alignSelf: 'stretch',
    alignContent: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});*/

export default SettingsScreen;