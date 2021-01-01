import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Temp = () => {
  return (
    <View style={styles.container}>
      <Text>Temp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Temp;
