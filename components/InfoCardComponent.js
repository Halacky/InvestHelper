import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../Styles/styles';

const InfoCard = props => {
  return (
    <View style={styles.ViewCard} pointerEvents="auto">
      <Text style={styles.TextOnCardMiddle}>
        {'Header'}
      </Text>

      <Text style={styles.TextOnCard}>
        {'Текст 1'}
      </Text>

      <Text style={styles.TextOnCardMiddle}>
        {'Текст 2'}
      </Text>
    </View>
  );
};

export default InfoCard;