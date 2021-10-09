import React, {useContext, useState} from 'react';
import styles from '../Styles/styles';
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

var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "back-vtb-hack-2021.herokuapp.com",
  "port": null,
  "path": "/rest/v2/oauth/token",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "authorization": "Basic dnRiLWtWTkdKZW40OjQ2MjJiYTA4MmI4MTBhNWRiMjc3MThjYzVhYjA0ODFjZmVlMWM5NTJhNTRlM2YyNWY1NzZlZjM4ZTYwYmM0NWU=",
    "cache-control": "no-cache",
    "postman-token": "7aa9e082-86ed-f595-3365-b4564ad5926c"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

  return (
    <ScrollView contentContainerStyle={styles.containerLS}>
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
            req.write(qs.stringify({ grant_type: 'password', username: email, password: password }));
            req.end();
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
