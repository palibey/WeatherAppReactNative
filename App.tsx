/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {Header} from './Header';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CountryFooter} from './CountryFooter';
import {checkExistence, codeToLatLong} from './codeToLatLong';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 410,
    height: 220,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function CountryTextInput(props: any) {
  return (
    <TextInput
      style={{height: 100, width: 100, backgroundColor: '#6EA9FE'}}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
    />
  );
}

function imageReturn(data: any, comp: any) {
  let arr = [];
  let cnt = 0;
  for (let i = 0; i < data.length; i++) {
    if (checkExistence(data[i])) {
      arr.push(
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://countryflagsapi.com/png/' + data[i],
            }}
          />
          {comp[i]}
        </View>,
      );
    } else if (!checkExistence(data[i]) && data[i] != '') {
      arr.push(
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-13.jpg',
            }}
          />
          <Text>Please Enter a Correct Country Name</Text>
        </View>,
      );
    } else if (cnt < 1) {
      cnt++;
      arr.push(
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://britishcountyflags.files.wordpress.com/2018/03/question-mark-flag.png',
            }}
          />
          <Text>Please Enter a Country Name</Text>
        </View>,
      );
    }
  }
  if (data == ['']) {
    return <Text>Please enter a country</Text>;
  }
  return arr;
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData]: any = useState([]);
  const [comp, setComp]: any = useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Header />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <CountryTextInput
            multiline
            editable
            numberOfLines={4}
            onChangeText={text => {
              setData(text.split(' ').map(String));
              CountryFooter(text.split(' ').map(String)).then(r => setComp(r));
              console.log(text.split(' ').map(String));
            }}
            style={{padding: 10}}
          />
          {imageReturn(data, comp)}
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
