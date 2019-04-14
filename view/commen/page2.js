import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,ScrollView,WhiteSpace} from 'react-native';
import MiddleView from '../component/fenlei/MiddleView'
import ReadList from '../component/PingLunList/ReadList'
import GuanZhu from '../component/guanzu/GuanZhu'
import Header from '../component/header/header';
import HeaderSro from '../component/header/headerSro';
export default class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
        title="读后感" 
        rightButton={<Image source={require('../Images/编辑.png')} style={styles.ButtonSty}/>}/>
        <HeaderSro style={{flex:1}}/>
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