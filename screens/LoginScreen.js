import React from 'react';
import {
  Button,
  Container,
  ScreenContainer,
  TextField,
  Touchable,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
} from 'react-native';
import styles from '../Styles/styles';

const LoginScreen = props => {

  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
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

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="padding"
        keyboardVerticalOffset={60}
        enabled={true}
      >
        <Container
          style={styles.ContainerHeader}
          elevation={0}
          useThemeGutterPadding={true}
        >
          <Image
            style={styles.image100}
            resizeMode="cover"
          />
          <Text style={styles.BigText}>
            VTB HACK2021-0DAY
          </Text>
        </Container>
        <Container useThemeGutterPadding={true} elevation={0}>
          <TextField
            style={styles.TextFieldSimple}
            onChangeText={email => setEmail(email)}
            value={email}
            keyboardType="email-address"
            label="Email"
            type="underline"
          />
          <TextField
            style={styles.TextFieldSimple}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            value={password}
            leftIconMode="inset"
            keyboardType="default"
            label="Password"
            type="underline"
          />
          <Button type="solid" onPress={() => {
              try {
                req.write(qs.stringify({ grant_type: 'password', username: email, password: password }));
                req.end();
                navigation.navigate('MainScreen', {});
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Sign In
          </Button>
          <Touchable onPress={() => {
            try {
              navigation.navigate('ForgotpasswordScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}>
            <Text style={styles.TextLinkRight}>
              Забыли пароль?
            </Text>
          </Touchable>
          <Touchable onPress={() => {
            try {
              navigation.navigate('SignupScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}>
            <Text style={styles.TextLinkRight}>
              Регистрация
            </Text>
          </Touchable>
        </Container>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default LoginScreen;