import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './header/Header';
import EmailScreen from './components/EmailScreen';
import SMSScreen from './components/SMSScreen';
import Button from './components/Button';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={ HomeScreen }
          options={ { title: 'Home', headerTitleAlign: 'center' } }

        />
        <Stack.Screen
          name='Email'
          component={ EmailScreen }
          options={ { title: 'Send Email', headerTitleAlign: 'center' } }
        />
        <Stack.Screen
          name='SMS'
          component={ SMSScreen }
          options={ { title: 'Send SMS', headerTitleAlign: 'center' } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ styles.form }>
      <Header />
      <View style={ styles.buttonContainer }>
        <Button title='EMAIL MY INFO' onPress={ () => { navigation.navigate('Email') } } />
      </View>
      <View>
        <Button title='SMS MY INFO' onPress={ () => { navigation.navigate('SMS') } } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 30,
    marginTop: 60,
  }
});
