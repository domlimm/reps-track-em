import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Dashboard, History, Temp } from '../screens/index';
import AddButtonNav from '../components/AddButtonNav';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false, activeTintColor: 'green' }}
      initialRouteName='Dashboard'
    >
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Add'
        component={Temp}
        options={{
          tabBarIcon: () => <AddButtonNav />
        }}
      />
      <Tab.Screen
        name='History'
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='calendar' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
