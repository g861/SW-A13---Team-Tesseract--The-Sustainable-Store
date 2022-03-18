import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const Input = (props) => {
    return (
        <TextInput
        Icon={<Icon></Icon>}
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height:65,
        backgroundColor: 'white',
        margin: 10,
        fontSize:20,
        borderRadius: 20,
        padding: 10,
        paddingLeft:25,
        borderWidth: 0,
        borderColor: '#708090'
    },
});

export default Input;