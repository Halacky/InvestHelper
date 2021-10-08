import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

const styles = StyleSheet.create({
  TextBalance: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 40,
  },
  TextChangeUp: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#3BC9EA',
  },
  TextChangeDown: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#FF4564',
  },
  ViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignContent: 'center',
  },
  ViewBalance: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginLeft: '10%',
    marginRight: '10%',
  },
});

export default BalanceInfo;