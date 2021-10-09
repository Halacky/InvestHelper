import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../Styles/styles';

const Card = props => {
  return (
    <View style={styles.ViewCard} pointerEvents="auto">
      <View style={styles.ViewRow} pointerEvents="auto">
        <Text style={styles.TextOnCard}>{'Текст 1'}</Text>

        <Text style={styles.TextOnCard}>{'Текст 2'}</Text>
      </View>

      <Text style={styles.TextOnCard}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      </Text>

      <Text style={styles.TextOnCard}>{'Текст 3'}</Text>
    </View>
  );
};

export default Card;