import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonOutline, ButtonSolid } from '@draftbit/ui';

const TwoOptions = props => {
  return (
    <View style={styles.ViewQuestion} pointerEvents="auto">
      <Text
        style={styles.TextQuestion}
        numberOfLines={1}
      >
        {'Вопрос'}
      </Text>
      <View style={styles.ViewButtonsRow} pointerEvents="auto">
        <ButtonSolid
          style={styles.ButtonPrimary}
          title="Вариант 1"
        >
          {`First`}
        </ButtonSolid>
        <ButtonOutline style={styles.ButtonSecondary} title="Вариант 2">
          {`Second`}
        </ButtonOutline>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewQuestion: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  TextQuestion: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#12142C',
  },
  ViewButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignContent: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  ButtonPrimary: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#5A45FF',
  },
  ButtonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#5A45FF',
  },
});

export default TwoOptions;