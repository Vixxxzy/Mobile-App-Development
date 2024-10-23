import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data.slice(0, 10)))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Users List" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(user => {
          const {id, name, username, email, phone, address} = user;
          return (
            <View key={id} style={styles.userContainer}>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Name: </Text>
                {name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Username: </Text>
                {username}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Email: </Text>
                {email}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Address: </Text>
                {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Phone: </Text>
                {phone}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
  userContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
