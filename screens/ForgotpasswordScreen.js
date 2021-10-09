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
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

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
        Востановление пароля
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
        <Button type="solid" onPress={() => {
            try {
              navigation.navigate('MainScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Напомнить пароль
        </Button>
        <Touchable onPress={() => {
          try {
            navigation.goBack();
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