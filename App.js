import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
  }

  onPressLogin = () => {
    const { email, password } = this.state;
    if (!this.validateEmail(email)) {
      Alert.alert("Error", "Email no válido");
      return;
    }
    if (!this.validatePassword(password)) {
      Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas y al menos 1 caracter especial");
      return;
    }
    Alert.alert("Éxito", "Inicio de sesión exitoso");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://portal.ucol.mx/content/micrositios/158/image/UdeC%20Abajo_Negro.png'}} style={styles.image} />
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
          />
          <Button
            onPress={this.onPressLogin}
            title="Iniciar sesión"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
