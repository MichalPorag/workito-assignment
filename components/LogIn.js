import React, {useState} from 'react';
import {Text, Alert, Button, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const LogIn: () => React$Node = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState(0);

  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(usernameOrEmail) === true) {
      alert('valid');
    } else {
      alert('The user name or email not found');
    }
  };
  const onLogin = () => {
    Alert.alert('Credentials', `${usernameOrEmail} + ${password}`);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.inputText}>Sample Login Form</Text>
        <TextInput
          value={this.state.username}
          onChangeText={setUsernameOrEmail(usernameOrEmail)}
          label="Email"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={setPassword(password)}
          label="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title={'Login'} style={styles.input} onPress={onLogin()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputText: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default LogIn;
