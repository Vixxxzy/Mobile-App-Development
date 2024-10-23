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
    <ScrollView>
      <Text style={styles.title}>BIODATA</Text>
      <Image style={styles.image1} source={require('./assets/test.jpg')} />
      <Text style={styles.text}>Nama : Rory, Vichers Yoel</Text>
      <Text style={styles.text}>Umur : 19 Tahun</Text>
      <Text style={styles.text}>Alamat : Desa Koka</Text>
      <Text style={styles.text}>Agama : Kristen Protestan</Text>
      <Text style={styles.text}>NIM : 105022210059</Text>
      <Text style={styles.text}>E-mail : vichersrory@gmail.com</Text>
      <Text style={styles.text}>
        Hobi : Bermain Basket, bermain Video Game, mendengarkan lagu
      </Text>
      <Text style={styles.pdk}>Pendidikan: </Text>
      <Text style={styles.pdk}>SD Kr. Eben Haezar Manado. </Text>
      <Text style={styles.pdk}>SMP Stella Maris Tomohon. </Text>
      <Text style={styles.pdk}>SMA Kr. Eben Haezar Manado. </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  image1: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    height: 350,
    width: 350,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 50,
  },
  image2: {
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 40,
    fontStyle: 'italic',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    borderWidth: 2,
    padding: 20,
    margin: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 20,
    margin: 5,
  },
  pdk: {
    color: 'white',
    backgroundColor: 'red',
    borderColor: 'black',
    padding: 1,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
  greenBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  redBox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

export default App;
