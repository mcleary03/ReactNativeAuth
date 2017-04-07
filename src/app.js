import React, { Component } from 'react';
import { View } from 'react-native';
// I set up a firebase account to use for email/password
//  sign-in authentication.
// THIS MUST BE ABOVE OTHER COMPONENT IMPORTS
import firebase from 'firebase';
// We do not have to specify .index.js here
//  because by default, the app knows to look
//  there if no file is specified in this directory.
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // adding life-cycle method
  // automatically invoked inside our component
  // in firebase web setup: copy/paste just the object
  //  because we are not actually in a web environment.
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCx3hoFsScWHwxQaE2LOqA_qhICxGD39Sc',
    authDomain: 'auth-69a87.firebaseapp.com',
    databaseURL: 'https://auth-69a87.firebaseio.com',
    projectId: 'auth-69a87',
    storageBucket: 'auth-69a87.appspot.com',
    messagingSenderId: '67162995435'
  });
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
