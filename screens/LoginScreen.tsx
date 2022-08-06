import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import InputField from '../components/InputFields';
import { AuthStackScreenProps } from '../types';

export default function LoginScreen({ navigation }: AuthStackScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <InputField
      label="username"
      />
      <InputField
      label="password"
      />

<TouchableOpacity onPress={() => navigation.replace('Register')} style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('Register')} style={styles.link}>
        <Text style={styles.linkText}>Register</Text>
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
