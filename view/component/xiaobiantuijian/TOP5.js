import React, { Component } from 'react'
import {StyleSheet, View,Text,Image} from 'react-native';
import { WingBlank,WhiteSpace } from '@ant-design/react-native';
var Bookdata = require('../../commen/shujia/book.json');
import bookLJ from '../../commen/shujia/bookLJ'
export default class TOP5 extends Component {
  render() {
    return (
    <View>
      <WhiteSpace/>
      <WhiteSpace/>
        <WingBlank>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around',}}>
        <Text style={{flex:5,fontWeight:'bold',fontSize: 19,}}>读者推荐TOP5</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around',}}>
          <Text>查看更多</Text>
        <Image source={require('../../Images/右箭头.png')} style={{width:20,height:20}}/>
        </View>
        </View>
        </WingBlank>
      {Bookdata.map((item,index)=>{
       if(index<5){return(
          <WingBlank key={index}>
            <WhiteSpace/>
            <View style={styles.container}>
            <Image source={bookLJ[item.title]} style={styles.imgSty}/>
              <View style={styles.container2}>
              <View style={{flex:0,flexDirection:'row',justifyContent: 'space-around',}}>
                  <Text style={styles.textSty1}>{item.title}</Text>
                  <Text style={styles.textSty4}>{index+1}</Text></View>
                <Text style={styles.textSty2}>{item.writer}</Text>
                <Text style={styles.textSty3}  numberOfLines={3}>{item.introduction}</Text>
              </View>
            </View>
            </WingBlank>
        )} 
      })}
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
    backgroundColor: '#fff',
  },
  imgSty:{
    height:100,
    width:80
  },
  textSty1:{
    fontSize:20,
    fontWeight: 'bold',
    width:280
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
    height:45,width:240,
    
  },
  textSty4:{
    fontSize:20,
    fontWeight: 'bold',
    color:'red',
    width:20
  },
  ButtonSty:{
    width:30,
    height:30,
    margin: 10,
  }
});