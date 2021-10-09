import React, {useState}from 'react';
import { FAB, ScreenContainer} from '@draftbit/ui';
import { StatusBar, StyleSheet, View } from 'react-native';
import Card from '../components/CardComponent';
import ProgressCard from '../components/ProgressCardComponent';
import BalanceInfo from '../components/BalanceInfoComponent';
import TouchCard from '../components/TouchCardComponent';
import InfoCard from '../components/InfoCardComponent';
import TwoOptions from '../components/TwoOptionsComponent';
import styles from '../Styles/styles';
import MyModal from '../components/ModalComponent';
import { 
  Text,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

const MainScreen = props => {

  var isVisible = true;

  const [ state, setState ] = useState(isVisible);

  const showModal = () =>{
      isVisible = true;
      setState(isVisible);
      console.log(state);
  }

  const closeModal = () =>{
    isVisible = false;
    setState(isVisible)
    console.log(state);
    console.log(props.state);
  }

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
        <FAB iconSize={32} iconName="FontAwesome/question" onPress={showModal}/>
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
        <Modal
            animationType = {"slide"}
            transparent = {true}
            visible={state}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <View  style = {styless.modal}>
              <Image 
                source={require('../assets/chert.png')}
                style = { styless.image }/>
                <Text style = { styless.text }>
                На этом уровне ты поймешь как новости влияют на стоимость акций. Твоя задача предугадать куда пойдут акции(вверх/вниз) из новостей</Text>

                <Text 
                  style={styless.closeText}
                  onPress={closeModal}>Close Modal</Text>
            </View>
          </Modal>
        {/* END CONTENT */}
      </View>
    </ScreenContainer>
  );
};

const styless = StyleSheet.create({
  modal:{
    backgroundColor:"rgba(255,255,255,0.7)",
    height: "100%",
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:25
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    padding: 40,
    color: "#000",
    backgroundColor: '#225094',
    borderRadius:5
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});

export default MainScreen;