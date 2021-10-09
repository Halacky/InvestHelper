import React from 'react';
import { Touchable } from '@draftbit/ui';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../Styles/styles';

const TouchCard = props => {

  const { navigation } = props;

  return (
    <Touchable
          onPress={() => {
            try {
              navigation.navigate('InteractScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
        </Touchable>

  );
};

export default TouchCard;