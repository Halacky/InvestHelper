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
            transparent={true}
            visible={state}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('../assets/dovolnie-klienti.jpg')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Соси хуй</Text>

              <Text 
                style={styles.closeText}
                onPress={closeModal}>Close Modal</Text>
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
    marginTop: 150,
    marginBottom: 10,
    width: "100%",
    height: 10,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});
export default withTheme(ModalScreen);
