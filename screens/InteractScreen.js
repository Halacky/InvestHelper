import React from 'react';
import { FAB, ScreenContainer} from '@draftbit/ui';
import { StatusBar, StyleSheet, View } from 'react-native';
import InfoCard from '../components/InfoCardComponent';
import TwoOptions from '../components/TwoOptionsComponent';
import styles from '../Styles/styles';

const InteractScreen = props => {

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
        <FAB iconSize={32} iconName="FontAwesome/question" />
      </View>
      <View style={styles.ViewMainContent} pointerEvents="auto">
        {/* DONT TOUCH UPPER */}
        {/* PASTE CONTENT AFTER THIS */}
        <InfoCard/>
        <TwoOptions/>
        {/* END CONTENT */}
      </View>
    </ScreenContainer>
  );
};

export default InteractScreen;