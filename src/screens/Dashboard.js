import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';
import * as Localization from 'expo-localization';

import { COLORS } from '../constants/Variables';

const { height } = Dimensions.get('window');

const Dashboard = () => {
  const dateTimeArray = new Date()
    .toLocaleString([], { timeZone: Localization.timezone })
    .split(' ');
  const time = dateTimeArray[4].split(':');
  const hour = time[0];
  const greeting =
    hour >= 0 && hour < 12
      ? 'good morning,'
      : hour >= 12 && hour < 17
      ? 'good afternoon,'
      : 'good evening,';

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.toggleContainer}>
          <Text style={{ fontFamily: 'roboto-medium' }}>dark light mode</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.name}>name</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.primary
          }}
        />
        <View style={styles.dashboardContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            decelerationRate='fast'
            bounces={false}
            contentContainerStyle={styles.dashboardScroll}
          >
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
    height: 0.28 * height,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleContainer: {
    height: 0.28 * 0.3 * height,
    width: '100%',
    paddingTop: StatusBar.currentHeight
  },
  titleContainer: {
    height: 0.28 * 0.7 * height,
    width: '100%',
    paddingHorizontal: 16
  },
  greeting: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: COLORS.background
  },
  name: {
    fontSize: 32,
    textTransform: 'uppercase',
    color: COLORS.background,
    fontWeight: 'bold'
  },
  dashboardContainer: {
    flex: 1,
    height: 0.72 * height,
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.background,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardScroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  underlayContainer: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
});

export default Dashboard;
