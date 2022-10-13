import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
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
          component={ Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

  function Home() {
    return (
      <View>
        <Header />
        <View style={ styles.buttonContainer }>
          {/* <TouchableOpacity activeOpacity={ 0.7 } onPress={ SendMessageWithEmail} /> */}
          <Button style={ styles.button } title='Email' onPress={ SendMessageWithEmail } />
        </View>
        <View>
          <Button style={ styles.button } title='SMS' onPress={ SendMessageWithSMS } />
        </View>
      </View>
    )
  }

  // const SendMessageWithEmail = ({ navigation }) => {
  //   return (
  //     <Button
  //       title='Send Email'
  //       onPress={ () => {
  //         navigation.navigate(EmailScreen);
  //       } }
  //     />
  //   )
  // }

  // const EmailScreen = ({ navigation, route }) => {
  //   return (
  //     <Text>This is the Email Screen</Text>
  //   )
  // }

  // const SendMessageWithSMS = ({ navigation }) => {
  //   return (
  //     <Button
  //       title='Send SMS'
  //       onPress={ () => {
  //         navigation.navigate('SMS');
  //       } }
  //     />
  //   )
  // }


  // [ message, setMessage ] = useState();

  // onChangeHandler = () => {
  //   // setMessage(value);
  //   console.log('works');
  // }

  // return (
  //   <View style={ styles.form }>
  //     <Header />
  //     <Text style={ styles.label }>Choose how your would like to send your message: </Text>
  //     <View style={styles.buttonContainer}>
  //       <SendMessageWithSMS />
  //         {/* style={ styles.button }
  //         title='Email'
  //         onPress={ SendMessageWithEmail } */}

  //     </View>
  //   </View>
  // );
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
