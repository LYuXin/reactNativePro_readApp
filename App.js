import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import store from './view/store'
import {Provider} from 'react-redux'
import LoginRegister from './view/commen/login/loginRegister'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <LoginRegister/>
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
