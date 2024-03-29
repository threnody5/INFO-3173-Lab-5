import { View, Text, Alert } from 'react-native';
import { ContactDetails } from '../contact/ContactDetails';
import { ScreenCSS } from '../css/ScreenCSS';
import Button from './Button';
import * as SMS from 'expo-sms';

function SMSScreen() {
    return (
        <View style={ ScreenCSS.form }>
            <View style={ ScreenCSS.disclaimerContainer }>
                <Text style={ ScreenCSS.disclaimerMessage }>YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
            </View>
            <View style={ ScreenCSS.contactList }>
                <Text>{ ContactDetails.name }</Text>
                <Text>{ ContactDetails.address }</Text>
                <Text>{ ContactDetails.city }, { ContactDetails.province }</Text>
                <Text>{ ContactDetails.phoneNumber }</Text>
                <Text>{ ContactDetails.emailAddress }</Text>
            </View>
            <View>
                <Button title='SEND SMS' onPress={ SendMessageWithSMS } />
            </View>
        </View>
    )
}

const SendMessageWithSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    const message = `${ContactDetails.name}  
                     ${ContactDetails.address} 
                     ${ContactDetails.city} 
                     ${ContactDetails.province} 
                     ${ContactDetails.phoneNumber} 
                     ${ContactDetails.emailAddress}`;

    if (!isAvailable) {
        Alert.alert('SMS is not available');
        return;
    }
    const { result } = await SMS.sendSMSAsync(
        [ '1231231234', '2342342345' ],
        message
    )
    if (result) {
        Alert.alert('Alert', 'SMS sent successfully.');
        return;
    }
    Alert.alert('Something went wrong, please try again.');
}

export default SMSScreen;