import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = () => {
  return <Text style={styles.title}>Welcome</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'black',
    marginVertical: 20,
    fontWeight: 'bold',
  },
});
