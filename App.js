import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './src/navigation/AppNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
};

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const loadAssetsAsync = async () => {
    await fetchFonts();
  };

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
