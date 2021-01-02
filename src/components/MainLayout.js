import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Appearance
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { COLORS, greeting } from '../constants/Variables';

const { height } = Dimensions.get('window');

const Sun = () => <Feather name='sun' size={28} color='#F4D03F' />;
const Moon = () => <Feather name='moon' size={28} color='#F4D03F' />;

const colorScheme = Appearance.getColorScheme();

const MainLayout = props => {
  console.log(colorScheme);

  const [isDark, setIsDark] = useState(colorScheme === 'dark' ? true : false);

  const toggleHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity onPress={toggleHandler}>
            {isDark ? <Sun /> : <Moon />}
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.greeting}>{greeting()}</Text>
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
            {props.children}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 0.28 * height,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleContainer: {
    height: 0.28 * 0.3 * height,
    width: '100%',
    paddingTop: StatusBar.currentHeight + 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titleContainer: {
    height: 0.28 * 0.7 * height,
    width: '100%',
    paddingHorizontal: 16
  },
  greeting: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: COLORS.background,
    fontFamily: 'roboto-medium'
  },
  name: {
    fontSize: 40,
    textTransform: 'uppercase',
    color: COLORS.background,
    fontWeight: 'bold',
    fontFamily: 'roboto-medium'
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

export default MainLayout;
