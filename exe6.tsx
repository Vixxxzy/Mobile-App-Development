import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const Registration = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumber = input => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setPhoneNumber(numericInput);
  };

  const handleRegister = () => {
    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Title title="Registration" />

      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUserName}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        maxLength={18}
        onChangeText={handlePhoneNumber}
        value={phoneNumber}
      />

      <Button label="Register" color="purple" onPress={handleRegister} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
