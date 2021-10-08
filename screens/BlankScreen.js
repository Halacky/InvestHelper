import React from 'react';
import { Button, Container, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const BlankScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewvo} pointerEvents="auto">
        <Container
          style={styles.ContainerdJ}
          elevation={0}
          useThemeGutterPadding={true}
        >
          <Button
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            type="solid"
            color={theme.colors.null}
          >
            {'Go back'}
          </Button>

          <Text style={[styles.Textbu, { color: theme.colors.strong }]}>
            {'Test text'}
          </Text>
        </Container>
      </View>
    </ScreenContainer>
  );
};

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

export default withTheme(BlankScreen);