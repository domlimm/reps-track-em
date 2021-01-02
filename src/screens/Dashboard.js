import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { LIGHT } from '../constants/Variables';
import MainLayout from '../components/MainLayout';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout></MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    flex: 1,
    backgroundColor: LIGHT.card
  }
});

export default Dashboard;
