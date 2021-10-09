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

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
  const [confirmPassword, setConfirmPassword] = React.useState(undefined);


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
          <Text style={styles.BigText}>
           Создать аккаунт
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
                    <TextField
            style={styles.TextFieldSimple}
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
            secureTextEntry={true}
            value={confirmPassword}
            leftIconMode="inset"
            keyboardType="default"
            label="Confirm password"
            type="underline"
          />
          <Button type="solid" onPress={() => {
              try {
                navigation.navigate('LoginScreen', {});
              } catch (err) {
                console.error(err);
              }
            }}
          >
           Зарегистрироваться
          </Button>
          <Touchable onPress={() => {
            try {
              navigation.navigate('ForgotpasswordScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}>
            <Text style={styles.TextLinkRight}>
             У вас уже есть аккаунт? Войдите здесь
            </Text>
          </Touchable>
        </Container>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default SignupScreen;