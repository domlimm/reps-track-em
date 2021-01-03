import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { LIGHT } from '../constants/Variables';
import MainLayout from '../components/MainLayout';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <View style={styles.cardContainer}>
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
  cardContainer: {
    alignSelf: 'center',
    backgroundColor: LIGHT.card,
    height: 0.28 * height,
    width: 0.8 * width,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Dashboard;
