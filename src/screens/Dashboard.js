import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { LIGHT, CARD_SHADOW } from '../constants/Variables';
import MainLayout from '../components/MainLayout';
import IndividualCard from '../components/IndividualCard';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <View style={[styles.chartContainer, CARD_SHADOW]}>
          <Text>chart</Text>
        </View>
        <View style={styles.individualContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            decelerationRate='fast'
          >
            {/* for each item in async storage list them */}
            <IndividualCard exercise='pull ups' amount={50} />
          </ScrollView>
        </View>
        <View style={[styles.chartContainer, CARD_SHADOW]}>
          <Text>chart</Text>
        </View>
        <View style={styles.individualContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            decelerationRate='fast'
          >
            {/* for each item in async storage list them */}
            <IndividualCard exercise='pull ups' amount={50} />
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
  individualContainer: {
    alignSelf: 'center',
    width: '80%',
    marginVertical: 20
  }
});

export default Dashboard;
