import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

const styles = StyleSheet.create({
  TextOnCard: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
  },
  TextOnCardMiddle: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
    alignSelf: 'center',
  },
  ViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignContent: 'center',
  },
  ViewCard: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: '#A5ADB7',
  },
});

export default InfoCard;