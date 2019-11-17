import React , {useState} from 'react';
import {connect} from 'react-redux';
import {View , StyleSheet , TouchableOpacity , TextInput} from 'react-native';

const mapsToStateToProps=(state)=>{
    return{
        usename = state.name
    }
}
const mapsDispatchToProps=(dispatch)=>{
    return
    {
        setChat : (message)=>{dispatch}
    }
}
const Input=(props)=>{
    [message , setMessage] = useState('')
    return(

        <View style = {styles.inputBox}>
            <TextInput value = {message} keyboardType = 'default' onChangeText = {(text)=>{setMessage(text)}} placeholder = "Write something...." />
            <TouchableOpacity style = {styles.sendButton}>
            <View>
                <Text>Send</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    inputBox: {
        alignSelf:'flex-end'
    }
})