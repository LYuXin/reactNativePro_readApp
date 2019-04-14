import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PageBook from './pageBook'
import ShujiaPage from '../commen/shujia/shujiaPage'
import BookList from './shujia/bookList'
const RootStack = createStackNavigator(
  {
    ShujiaPage:ShujiaPage,
    PageBook:PageBook,
    BookList:BookList
  },
  {
    // headerMode: 'none',
    initialRouteName:'ShujiaPage'
  }
);
const AppContainer = createAppContainer(RootStack);
export default class Page1 extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}