import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CARD_SHADOW, LIGHT } from '../constants/Variables';

const ExerciseCard = ({ exercise, amount }) => {
  return (
    <View style={[styles.card, CARD_SHADOW]}>
      <Text>{exercise}</Text>
      <Text>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: LIGHT.card,
    height: 200,
    width: 180,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ExerciseCard;
