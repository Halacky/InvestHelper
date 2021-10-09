import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../Styles/styles';

const BalanceInfo = props => {
  return (
    <View style={styles.ViewBalance} pointerEvents="auto">
      <Text
        style={styles.TextBalance}
        numberOfLines={1}
      >
        {'1000000 Р'}
      </Text>
      <View style={styles.ViewRow} pointerEvents="auto">
        <Text style={styles.TextChangeUp}>
          {'+1000 Р'}
        </Text>
        <Text style={styles.TextChangeDown}>
          {'+ 20%'}
        </Text>
      </View>
    </View>
  );
};

export default BalanceInfo;