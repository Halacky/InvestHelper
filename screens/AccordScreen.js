import React, {useState, useEffect} from 'react';
import { Button, Container, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import Accordian from '../assets/Components/Accordian';

const state = {
    news :[
      { 
        shortName: 'Non Veg Biryanis', 
        text: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      },
      { 
        shortName: 'Pizzas',
        text: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

      },
      { 
        shortName: 'Drinks',
        text: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

      },
      { 
        shortName: 'Deserts',
        text: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

      },
    ]
   }

const AccordScreen = props => {
  
  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewvo} pointerEvents="auto">
      { renderAccordians() }
      </View>
    </ScreenContainer>
  );
};

renderAccordians=()=> {
    const items = [];
    for (var item of state.news) {
        items.push(
            <Accordian 
                title = {item.shortName}
                data = {item.text}
            />
        );
    }
    return items;
}


const styles = StyleSheet.create({
  Textbu: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  ContainerdJ: {
    justifyContent: 'center',
  },
  Viewvo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    justifyContent: 'center',
  },
});

export default withTheme(AccordScreen);