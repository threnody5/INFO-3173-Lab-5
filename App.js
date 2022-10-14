import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
      <View style={styles.buttonContainer}>
        <Button title='EMAIL MY INFO' color='#80bfff' onPress={ () => { navigation.navigate('Email') } } />
        <Button title='SMS MY INFO' color='#80bfff' onPress={ () => { navigation.navigate('SMS') } } />
      </View>
    </View>
  )
}

const EmailScreen = () => {
  return (
    <View>
      <View>
        <Text>YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
      </View>
      <View style={ styles.contactList }>
        <Text style={ styles.contactList }>{ contactDetails.name }</Text>
        <Text>{ contactDetails.address }</Text>
        <Text>{ contactDetails.city }, { contactDetails.province }</Text>
        <Text>{ contactDetails.phoneNumber }</Text>
        <Text>{ contactDetails.emailAddress }</Text>
      </View>
      <View>
        <Button title='SEND Email' onPress={ SendMessageWithEmail } />
        {/* <TouchableOpacity activeOpacity={ 0.8 } onPress={ () => { console.log('it works!') } }>
          <Text color={ styles.buttonText }>Touch Me</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const SMSScreen = () => {
  return (
    <View>
      <View>
        <Text>YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
      </View>
      <View style={ styles.contactList }>
        <Text style={ styles.contactList }>{ contactDetails.name }</Text>
        <Text>{ contactDetails.address }</Text>
        <Text>{ contactDetails.city }, { contactDetails.province }</Text>
        <Text>{ contactDetails.phoneNumber }</Text>
        <Text>{ contactDetails.emailAddress }</Text>
      </View>
      <View>
        <Button title='SEND SMS' onPress={ SendMessageWithSMS } />
        {/* <TouchableOpacity activeOpacity={ 0.8 } onPress={ () => { console.log('it works!') } }>
        <Text color={ styles.buttonText }>Touch Me</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  )
}

const SendMessageWithEmail = () => {
  Alert.alert('Email has been sent successfully!');
}

const SendMessageWithSMS = () => {
  Alert.alert('SMS has been sent successfully!');
}

const contactDetails = {
  name: 'William Watson',
  address: '654 Main Street',
  city: 'St Thomas',
  province: 'ON',
  phoneNumber: '519-635-1563',
  emailAddress: 'w_watson156803@fanshaweonline.ca'
}

const styles = StyleSheet.create({
  contactList: {
    textTransform: 'uppercase',
  },
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
    justifyContent: 'center',
    width: '70%',
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
});
