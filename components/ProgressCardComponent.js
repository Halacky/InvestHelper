import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../Styles/styles';

const ProgressCard = props => {
  return (
    <View style={styles.ViewCard} pointerEvents="auto">
        <Text style={styles.TextProgressCount}>{'30%'}</Text>
      <Progress.Bar progress={0.3} width={null} color={'#3BC9EA'}/>
      <Text style={styles.TextOnProgressCard}>{'Цель какая-то'}</Text>
    </View>
  );
};

/*const styles = StyleSheet.create({
  TextProgressCount: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 20,
    color: '#12142C',
    alignSelf: 'center',
  },
  TextOnProgressCard: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
    alignSelf: 'center',
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
});*/

export default ProgressCard;