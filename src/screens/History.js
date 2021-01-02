import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { COLORS } from '../constants/Variables';
import MainLayout from '../components/MainLayout';

const History = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <Text>History</Text>
      </MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default History;
