import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Botton from '../../component/botton/Botton'
import Header from '../../component/header/header'
export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header/>
      <Botton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
