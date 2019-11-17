import React ,  { useState } from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import StoreAction from '../store/action/action';

const mapDispatchToProps = (dispatch)=>{
  return{
    setName : (name)=>{dispatch({type : StoreAction.setName() , name : name})}
  }
}

function Login(props) {
  const [username , setUsername]  = useState('');
  const [password , Setpassword]  = useState('');
  const login=()=>{
    props.setName(username)
  }
  return (
    <View style = {styles.container} >
      <Text style = {styles.text}>Login</Text>
      <TextInput style = {styles.input} value = {username} onChangeText = {(text)=>{setUsername(text)}} keyboardType= 'default' placeholder = "Username" />
      <TextInput style = {styles.input} secureTextEntry = {true} value = {password} onChangeText = {(text)=>{Setpassword(text)}} keyboardType= 'default' placeholder = "Password" />
      <TouchableOpacity  style = {styles.loginButton} onPress = {()=>{login()}} >
        <View>
          <Text style = {styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'green',
    borderRadius:6,
    width: 250,
    height: 50,
    marginTop:10,
    fontSize:16,
    paddingLeft:10
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  loginButton:{
    backgroundColor:'#239B56',
    borderRadius:6,
    marginTop:10,
    width: 250,
    height: 50,
    alignItems:'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize:17,
    fontWeight:'500',
  }
});

export default connect( null,mapDispatchToProps)( Login);