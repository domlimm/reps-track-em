import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CARD_SHADOW, LIGHT } from '../constants/Variables';

const IndividualCard = ({ exercise, amount }) => {
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
    height: 300,
    width: 150
  }
});

export default IndividualCard;
