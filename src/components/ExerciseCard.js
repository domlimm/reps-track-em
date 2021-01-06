import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CARD_SHADOW, LIGHT } from '../constants/Variables';

const ExerciseCard = ({ exercise, amount }) => {
  return (
    <View style={[styles.card, CARD_SHADOW]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.totalText}>TOTAL</Text>
          <Text style={styles.headerText}>{exercise}</Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.valueText}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: LIGHT.card,
    height: 200,
    width: 180,
    marginRight: 24,
    paddingHorizontal: 20,
    paddingTop: 24
  }
});

export default ExerciseCard;
