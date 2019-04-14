import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PageBook from './pageBook'
import ShujiaPage from '../commen/shujia/shujiaPage'
import BookList from './shujia/bookList'
import PaiMing from '../commen/paiming/PaiMing'
import GuanZhu from '../commen/paiming/guanzhu'
import PageMyList from './pageMyList'
import ChongZhi from './chongzhi/chongzhi'
const RootStack = createStackNavigator(
  {
    PageMyList:PageMyList,
    PaiMing:PaiMing,
    GuanZhu:GuanZhu,
    ChongZhi:ChongZhi,
  },
  {
    // headerMode: 'none',
    initialRouteName:'PageMyList'
  }
);
const AppContainer = createAppContainer(RootStack);
export default class Page3 extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}