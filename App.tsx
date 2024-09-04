import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    //JSX
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Hello React Native</Text>
      <TextInput placeholder="Masukan Email" style={styles.input} />
      <Image
        style={styles.image1}
        source={require('./assets/programmer.jpeg')}
      />
      <Image
        style={styles.image2}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        style={styles.image3}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <View style={styles.blueBox} />
      <View style={styles.redBox} />
      <View style={styles.yellowBox} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  image1: {
    height: 150,
    width: 150,
  },
  image2: {
    height: 150,
    width: 150,
  },
  image3: {
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  redBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});

export default App;
