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