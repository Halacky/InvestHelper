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

export default ProgressCard;