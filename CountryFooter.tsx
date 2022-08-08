import React from 'react';
import {codeToLatLong} from './codeToLatLong';
import {Text, View} from 'react-native';

export const CountryFooter = async (arr: String) => {
  const fetcher = () => {
    const promises: any = [];
    for (let i = 0; i < arr.length; i++) {
      promises.push(
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=' +
            codeToLatLong(arr[i])[0] +
            '&lon=' +
            codeToLatLong(arr[i])[1] +
            '&appid=' +
            '8ceaf8462e60a49d7e34381c5afcb18e',
        ).then(r => r.json()),
      );
    }
    return Promise.all(promises);
  };
  const getData: any = await fetcher();
  console.log('--------------------------------------------------');
  console.log('data', getData);

  const toReturn: any = [];
  for (let i = 0; i < arr.length; i++) {
    toReturn.push(
      <View>
        <Text>{getData[i].sys.country}</Text>
        <Text>Description: {getData[i].weather[0].description}</Text>
        <Text>Feels Like: {getData[i].main.feels_like}</Text>
        <Text>Pressure: {getData[i].main.pressure}</Text>
        <Text>Humidity: {getData[i].main.humidity}</Text>
        <Text>Wind Speed: {getData[i].wind.speed}</Text>
      </View>,
    );
  }
  return toReturn;
};
