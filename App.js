import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      textValue: '',
    };
  }
  onChange = (value) => {
    console.warn(`El switch cambiará a: ${value}`)
    this.setState({switchValue: value})
  }
  onChangeText = (text) => {
    this.setState({textValue: text})
  }
  onPressLearnMore = () => {
    console.warn("Presionaste el botón")
    Alert.alert("Texto ingresado", this.state.textValue)
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.onChangeText}
          value={this.state.textValue}
        />
        <Switch 
          onValueChange={this.onChange}
          value = {this.state.switchValue}/>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>MyGames -- Fuentes</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
