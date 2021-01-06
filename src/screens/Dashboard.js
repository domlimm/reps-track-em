import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { LIGHT, CARD_SHADOW } from '../constants/Variables';
import MainLayout from '../components/MainLayout';
import ExerciseCard from '../components/ExerciseCard';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <Text style={styles.header}>overview</Text>
        <View style={[styles.chartContainer, CARD_SHADOW]}>
          <Text>chart</Text>
        </View>
        <Text style={styles.header}>summary</Text>
        <View style={styles.exercisesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            contentContainerStyle={{ paddingLeft: 2 }}
          >
            {/* for each item in async storage list them */}
            <ExerciseCard exercise='pull ups' amount={50} />
            <ExerciseCard exercise='pull ups' amount={50} />
            <ExerciseCard exercise='pull ups' amount={50} />
            <ExerciseCard exercise='pull ups' amount={50} />
            <ExerciseCard exercise='pull ups' amount={50} />
            <ExerciseCard exercise='pull ups' amount={50} />
          </ScrollView>
        </View>
      </MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chartContainer: {
    alignSelf: 'center',
    backgroundColor: LIGHT.card,
    height: 0.28 * height,
    width: 0.8 * width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  exercisesContainer: {
    alignSelf: 'center',
    width: '100%',
    height: 240,
    paddingLeft: width * 0.1
  },
  header: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: LIGHT.font,
    fontWeight: 'bold',
    fontFamily: 'roboto-medium',
    paddingLeft: width * 0.1,
    marginBottom: 10
  }
});

export default Dashboard;
