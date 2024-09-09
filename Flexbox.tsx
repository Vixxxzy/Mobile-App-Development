import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View>
      <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
