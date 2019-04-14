import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,Navigator} from 'react-native';
import BookList from './bookList'
import Header from '../../component/header/header';
import Search from '../shujia/search'

export default class ShujiaPage extends Component {
  static navigationOptions = ({navigation,navigationOptions }) => {
    console.log(navigation)
    return {
        title: '书架',
    };
};
  render() {
    return (
      <View style={styles.container}>
      <Search/>
      <BookList navigation= {this.props.navigation}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ButtonSty:{
    width:30,
    height:30,
    margin: 10,
  }
});