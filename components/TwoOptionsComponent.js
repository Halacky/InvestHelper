import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonOutline, ButtonSolid } from '@draftbit/ui';
import styles from '../Styles/styles';

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

export default TwoOptions;