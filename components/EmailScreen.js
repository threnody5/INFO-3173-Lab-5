import { View, Text, Alert } from 'react-native';
import { ContactDetails } from '../contact/ContactDetails';
import { ScreenCSS } from '../css/ScreenCSS';
import Button from './Button';

function EmailScreen() {
    return (
        <View style={ ScreenCSS.form }>
            <View style={ ScreenCSS.disclaimerContainer }>
                <Text style={ ScreenCSS.disclaimerMessage } >YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
            </View>
            <View style={ ScreenCSS.contactList }>
                <Text>{ ContactDetails.name }</Text>
                <Text>{ ContactDetails.address }</Text>
                <Text>{ ContactDetails.city }, { ContactDetails.province }</Text>
                <Text>{ ContactDetails.phoneNumber }</Text>
                <Text>{ ContactDetails.emailAddress }</Text>
            </View>
            <View>
                <Button title='SEND Email' onPress={ SendMessageWithEmail } />
            </View>
        </View>
    )
}

const SendMessageWithEmail = () => {
    Alert.alert('Email has been sent successfully!');
}

export default EmailScreen;