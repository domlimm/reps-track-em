export const LIGHT = {
  primary: '#2CAC87',
  background: '#E4E3E6',
  card: '#F7FAFC',
  font: '#343946'
};

export const CARD_SHADOW = {
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2
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
