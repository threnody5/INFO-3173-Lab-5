import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as SMS from 'expo-sms';

function SendMessageWithSMS() {
  // [ props.message, setMessage ] = useState();

  // onChangeHandler = (value) => {
  //   setMessage(value);
  // }

  return (
    <View>
      <Text>SMS works!</Text>
      {/* <Text style={ styles.title }>SMS</Text>
      <TextInput style={ styles.textInput }
        multiline={ true }
        numberOfLines={ 5 }
        onChangeText={ onChangeHandler }
        placeholder='SMS'></TextInput>
      <Button title='Send via SMS' onPress={ SendViaSMS } /> */}
    </View>
  )
}


// const SendViaSMS = async () => {
//   const isAvailable = await SMS.isAvailableAsync();
//   if (!isAvailable) {
//     Alert.alert('SMS is not available');
//     return;
//   }
//   console.log(result);
//   const { result } = await SMS.sendSMSAsync(
//     [ '1231231234', '2342342345' ],
//     message
//   );
// };

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
  }
})

export default SendMessageWithSMS;