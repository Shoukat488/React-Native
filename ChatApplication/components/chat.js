import React from 'react';
import {View , StyleSheet} from 'react-native';
import Input from './input';
import List from './list';

const Chat=()=>{
    return(
        <View style = {styles.container}>
            <List/>
            <Input/>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    }
})

export default Chat;