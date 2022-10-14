import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SendMessageWithSMS from './components/SendMessageWithSMS';
import SendMessageWithEmail from './components/SendMessageWithEmail';
import Header from './header/Header';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={ HomeScreen }
          options={ { title: 'Home' } }
        />
        <Stack.Screen
          name='Email'
          component={ EmailScreen }
          options={ { title: 'Send Email' } }
        />
        <Stack.Screen
          name='SMS'
          component={ SMSScreen }
          options={ { title: 'Send SMS' } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Button title='EMAIL MY INFO' onPress={ () => { navigation.navigate('Email') } } />
      <Button title='SMS MY INFO' onPress={ () => { navigation.navigate('SMS') } } />
    </View>
  )
}

const EmailScreen = () => {
  return (
    <View>
      <Text>This is the Email Screen</Text>
    </View>
  )
}

const SMSScreen = () => {
  return (
    <View>
      <Text>This is the SMS Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 30,
    marginTop: 60,
  },
  label: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
});
