import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputFields';
import { Text, View } from '../components/Themed';
import RegisterWebAuth from '../components/RegisterWebAuth';

import { AuthStackScreenProps } from '../types';

export default function RegisterScreen({ navigation }: AuthStackScreenProps<'Register'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      <RegisterWebAuth path="Register"/>
      <InputField
      label="Username"
      />
      <InputField
      label="Password"
      />
       <InputField
      label="Confirm Password"
      />
      <TouchableOpacity onPress={() => {
        navigation.replace('Welcome')
        }} 
        style={styles.link}>
        <Text style={styles.linkText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
