import React from 'react';
import { Button, Container, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground style={styles.ImageBackgroundUN} resizeMode="cover">
        <View style={styles.ViewlX}>
          <Text
            style={[theme.typography.headline1, { color: theme.colors.strong }]}
          >
            {'Hello, world!'}
          </Text>

          <Text
            style={[
              theme.typography.subtitle1,
              styles.Texti0,
              { color: theme.colors.strong },
            ]}
          >
            {'First screen for example'}
          </Text>
        </View>

        <View style={styles.ViewQT}>
          <Container
            style={{ borderRadius: theme.roundness }}
            useThemeGutterPadding={false}
            elevation={3}
          >
            <Button
              onPress={() => {
                try {
                  navigation.navigate('ModalScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.ButtonqC}
              type="solid"
              color={theme.colors.strong}
              labelColor={theme.colors.background}
            >
              {'Test button'}
            </Button>
          </Container>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Texti0: {
    marginTop: 4,
  },
  ViewlX: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  ButtonqC: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
  },
  ViewQT: {
    width: '100%',
    paddingLeft: 34,
    paddingRight: 34,
  },
  ImageBackgroundUN: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    flexGrow: 1,
  },
});

export default withTheme(WelcomeScreen);