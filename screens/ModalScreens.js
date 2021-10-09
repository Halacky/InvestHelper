import React, { useState } from 'react';
import { Button, Container, ScreenContainer, withTheme } from '@draftbit/ui';

import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

const ModalScreen = props => {
    

    var isVisible =false;

    const [ state, setState ] = useState(isVisible);

    const showModal = () =>{
        isVisible = true;
        setState(isVisible)
        console.log("Gg");
    }

    const closeModal = () =>{
        isVisible = false;
        setState(isVisible)
        console.log("Gg");
    }

    return (
      <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
        <View style = { styles.container }>

        <Modal
            animationType = {"slide"}
            transparent = {true}
            visible={state}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <View  style = {styles.modal}>
              <Image 
                source={require('../assets/chert.png')}
                style = { styles.image }/>
                <Text style = { styles.text }>
                На этом уровне ты поймешь как новости влияют на стоимость акций. Твоя задача предугадать куда пойдут акции(вверх/вниз) из новостей</Text>

                <Text 
                  style={styles.closeText}
                  onPress={closeModal}>Close Modal</Text>
            </View>
          </Modal>

          <TouchableOpacity
              style={styles.button}
              onPress={showModal}>
              <Text style={styles.buttonText}>Show Modal</Text>
          </TouchableOpacity> 

        </View>
      </ScreenContainer>
    );
  };

const styles = StyleSheet.create({
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
export default withTheme(ModalScreen);
