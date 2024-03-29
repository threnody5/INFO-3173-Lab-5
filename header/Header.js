import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

    const displayInfo = 'Send My Info w_watson156803 (Lab_5)';

    return (
        <View>
            <Text style={ styles.container }>{ displayInfo }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textTransform: 'uppercase',
        color: '#33334d',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 60,
        fontSize: 30,
        width: '100%'
    }
})

export default Header;