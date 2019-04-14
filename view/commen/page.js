import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,ScrollView} from 'react-native';
import LunBo from '../component/lunbo/lunbo'
import ListFL from '../component/fenlei/ListFL'
import Header from '../component/header/header';
import Search from '../commen/shujia/search'
import Xiao from '../component/xiaobiantuijian/xiao';
import Changxiao from '../component/xiaobiantuijian/changxiao';
import TOP5 from '../component/xiaobiantuijian/TOP5';
export default class Page extends Component {
  render() {
    return (
      <View>
        <Header titleView={<Search/>}/>
        <ScrollView style={{marginBottom:60}}>
        <LunBo/>
        <ListFL/>
        <Xiao/>
        <Changxiao/>
        <TOP5/>
        </ScrollView>
      </View>
    )
  }
}