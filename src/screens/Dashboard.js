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
      <View style={{ flex: 1 }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.primary
          }}
        />
        <View style={styles.dashboardContainer}>
          <ScrollView>
            <Text>DASHBOARD</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 0.33 * height,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardContainer: {
    flex: 1,
    height: 0.67 * height,
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.background,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  underlayContainer: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
});

export default Dashboard;
