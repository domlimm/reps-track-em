export const LIGHT = {
  primary: '#00c9bd',
  background: '#edebf7',
  card: '#fff'
};

export const CARD_SHADOW = {
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8
};

import * as Localization from 'expo-localization';

export const greeting = () => {
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

  return greeting;
};
