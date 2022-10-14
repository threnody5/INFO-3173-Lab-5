import { View, Text, Alert } from 'react-native';
import { ContactDetails } from '../contact/ContactDetails';
import { ScreenCSS } from '../css/ScreenCSS';
import Button from './Button';
import * as MailComposer from 'expo-mail-composer';

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
                <Button title='SEND EMAIL' onPress={ SendMessageWithEmail } />
            </View>
        </View>
    )
}

const SendMessageWithEmail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();

    const message = `${ContactDetails.name}
                     ${ContactDetails.address}
                     ${ContactDetails.city}
                     ${ContactDetails.province}
                     ${ContactDetails.phoneNumber}
                     ${ContactDetails.emailAddress}`;

    var emailOptions = {
        recipients: [ 'w_watson156803@fanshaweonline.ca' ],
        subject: 'Request Contact Details',
        body: message
    };
    if (!isAvailable) {
        Alert.alert('Email is not available');
        return;
    }
    Alert.alert('Alert', 'Email sent successfully.');

    MailComposer.composeAsync(emailOptions).then((result) => { console.log(result) });
}

export default EmailScreen;