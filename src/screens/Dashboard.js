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
        <View style={[styles.chartContainer, CARD_SHADOW]}>
          <Text>chart</Text>
        </View>
        <View style={styles.exercisesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            contentContainerStyle={{ paddingLeft: 4 }}
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
    justifyContent: 'center'
  },
  exercisesContainer: {
    paddingTop: 28,
    alignSelf: 'center',
    width: '80%',
    height: 240
  }
});

export default Dashboard;
