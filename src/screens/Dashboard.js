import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { LIGHT, CARD_SHADOW } from '../constants/Variables';
import MainLayout from '../components/MainLayout';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <View style={[styles.chartContainer, CARD_SHADOW]}>
          <Text>chart</Text>
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
  }
});

export default Dashboard;
