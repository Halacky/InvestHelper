import React from 'react';
import { FAB, ScreenContainer} from '@draftbit/ui';
import { StatusBar, StyleSheet, View } from 'react-native';
import Card from '../components/CardComponent';
import ProgressCard from '../components/ProgressCardComponent';
import BalanceInfo from '../components/BalanceInfoComponent';
import TouchCard from '../components/TouchCardComponent';
import InfoCard from '../components/InfoCardComponent';
import TwoOptions from '../components/TwoOptionsComponent';

const MainScreen = props => {

  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <ScreenContainer hasSafeArea={true}>
      <View
        style={styles.ViewTopBar}
        pointerEvents="auto"
      >
        <FAB iconSize={32} iconName="FontAwesome/question" />
        <FAB
          onPress={() => {
            try {
              navigation.navigate('SettingsScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}
          iconSize={32}
          iconName="MaterialIcons/settings"
        />
      </View>
      <View style={styles.ViewMainContent} pointerEvents="auto">
        {/* DONT TOUCH UPPER */}
        {/* PASTE CONTENT AFTER THIS */}
        <BalanceInfo/>
        <ProgressCard/>
        <Card/>
        <TouchCard navigation={navigation}/>
        <InfoCard/>
        <TwoOptions/>
        {/* END CONTENT */}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
});

export default MainScreen;