import React, { Component } from 'react'
import {StyleSheet, View,Text,Image} from 'react-native';
import { WingBlank,WhiteSpace } from '@ant-design/react-native';
import MiddleView from '../fenlei/MiddleView';
import bookLJ from '../../commen/shujia/bookLJ'
export default class BookHeader extends Component {
  render() {
    
    return (
    <View>
    <WingBlank>
      <WhiteSpace/>
      <View style={styles.container}>
      <Image source={bookLJ[this.props.title]} style={styles.imgSty}/>
        <View style={styles.container2}>
        <Text style={styles.textSty1}>{this.props.title}</Text>
        <Text style={styles.textSty2}>{this.props.writer}</Text>
        <Text style={styles.textSty3}>{this.props.introduction}</Text>
        <Text style={styles.textSty2}>更多</Text>        
        </View>
      </View>
      </WingBlank>
      <MiddleView></MiddleView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    flexDirection:'column',
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  imgSty:{
    height:150,
    width:100
  },
  textSty1:{
    fontSize:20,
    fontWeight: 'bold',
  },
  textSty2:{
    fontSize:10,
    fontWeight: 'bold',
    color:'#1296db',
    marginTop:5
  },
  textSty3:{
    fontSize:10,
    fontWeight: 'bold',
    marginTop:5,
    height:60,width:240
  },
  ButtonSty:{
    width:30,
    height:30,
    margin: 10,
  }
});