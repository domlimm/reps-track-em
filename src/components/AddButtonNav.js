import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Platform, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { LIGHT } from '../constants/Variables';

const AddButtonNav = () => {
  const rotateValue = useState(new Animated.Value(0))[0];
  const [mode, setMode] = useState(false);

  const pressHandler = () => {
    Animated.timing(rotateValue, {
      toValue: mode ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start();

    setMode(!mode);
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg']
  });

  const animatedRotation = {
    transform: [{ rotate: rotation }]
  };

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.button}>
      <Animated.View style={animatedRotation}>
        <FontAwesome5 name='plus' size={24} color='#FFF' />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: LIGHT.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -40,
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: LIGHT.primary,
    shadowOffset: {
      height: 10
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 3,
    borderColor: 'white'
  }
});

export default AddButtonNav;
