import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BlankScreen from './screens/BlankScreen';
import ModalScreen from './screens/ModalScreen';
import AccordScreen from './screens/AccordScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="BlankScreen" component={BlankScreen} />

      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="AccordScreen" component={AccordScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
