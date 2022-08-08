import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {codeToLatLong} from './codeToLatLong';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export function Header() {
  return (
    <View>
      <Text style={styles.bigBlue}> Welcome to the Flag App</Text>
      <Text style={styles.bigBlue}> Please enter the flag names</Text>
    </View>
  );
}
