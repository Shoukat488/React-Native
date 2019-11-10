import React from 'react';
import { StyleSheet , SafeAreaView  } from 'react-native';
import Login from './components/login';
import store from './store/store';
import {Provider} from 'react-redux';
export default function App() {
  
  return (
    <Provider store = {store}>
    <SafeAreaView style = {styles.container}>
     <Login />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#239B56'
  }
});