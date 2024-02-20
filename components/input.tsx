import { View, Text, TextInput, StyleSheet } from 'react-native';



function Input ({name}) {
    return (
        <View>
            <Text >{name}</Text>
            <TextInput style={styles.input} />
        </View>
    );
}
const styles = StyleSheet.create({

    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 20,
        height: 40,
        
    },


});
export default Input;
