import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { COLORS } from '../constants/Variables';

const { height } = Dimensions.get('window');

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>dark light mode</Text>
        <Text>header</Text>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView>
          <Text>stuff</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  headerContainer: {
    height: 0.33 * height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  dashboardContainer: {
    height: 0.67 * height
  }
});

export default Dashboard;
