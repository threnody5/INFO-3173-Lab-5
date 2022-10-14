import { Text, Pressable, StyleSheet, View } from 'react-native';

export default function Button(props) {
    const { onPress, title } = props;
    return (
        <View style={ styles.buttonContainer }>
            <Pressable style={ styles.button } onPress={ onPress } >
                <Text style={ styles.text }>{ title }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#000',
        borderRadius: 4,
    },
    buttonContainer: {
        paddingVertical: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    }
})