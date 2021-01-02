import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { COLORS } from '../constants/Variables';
import MainLayout from '../components/MainLayout';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <Text>Dashboard</Text>
      </MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Dashboard;
