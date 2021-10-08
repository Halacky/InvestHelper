import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        //source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>VTB HACK2021-0DAY</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Пароль"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Войти"
        onPress={() => {
          try {
            navigation.navigate('MainScreen', {});
          } catch (err) {
            console.error(err);
          }
        }}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {
        try {
          navigation.navigate('ForgotpasswordScreen', {});
        } catch (err) {
          console.error(err);
        }
      }}>
        <Text style={styles.navButtonText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          try {
            navigation.navigate('SignupScreen', {});
          } catch (err) {
            console.error(err);
          }
        }}>
        <Text style={styles.navButtonText}>
          Еще не зарегестрированы? Создать аккаунт
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});