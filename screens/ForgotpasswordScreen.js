import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styles from '../Styles/styles';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.containerFS}>
      <Text style={styles.text}>Востановление пароля</Text>
      
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Напомнить пароль"
        //onPress={() => register(email, password)}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.navButtonText}>У вас уже есть аккаунт? Войдите здесь</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;