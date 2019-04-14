/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Botton from './view/component/botton/Botton'
import Header from './view/component/header/header'
import store from './view/store'
import {Provider} from 'react-redux'
import Login from './view/commen/login/login'
import LoginRegister from './view/commen/login/loginRegister'
import WelcomeScreen from './view/commen/WelcomeScreen'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      {/* <Header/>
      <Botton/> */}
      <LoginRegister/>
      {/* <WelcomeScreen/> */}
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
