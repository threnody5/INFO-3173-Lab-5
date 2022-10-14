import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

    const displayInfo = 'Send My Info w_watson156803';

    return (
        <View>
            <Text style={ styles.container }>{ displayInfo }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 0,
        paddingBottom: 10,
        fontSize: 30,
        width: '100%'
    }
})

export default Header;