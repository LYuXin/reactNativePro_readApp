import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,Dimensions} from 'react-native';
import {Button,WingBlank,WhiteSpace,InputItem} from '@ant-design/react-native'
import Header from '../../component/header/header'
import Search from '../../commen/shujia/search';
import { bold } from 'ansi-colors';
let {widthW}=Dimensions.get('window');
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* <Header 
              titleView={<Search/>}
              title="登录"
              leftButton={<Image source={require('../../Images/bell.png')} style={styles.ButtonSty}/>}
              rightButton={<Image source={require('../../Images/右箭头.png')} style={styles.ButtonSty}/>}
              /> */}
      <Text style={styles.textSy}>登录</Text>
        <View style={styles.btn1}>
        <WingBlank>
          <InputItem placeholder="请输入用户名" type="text"> 用户名 </InputItem>
          <InputItem placeholder="请输入密码" type="password"> 密码 </InputItem>
        </WingBlank>
        <WingBlank>
        <Button style={styles.btn} type='primary' onPress={() => this.props.navigation.navigate('MainPage')}>登录</Button>
        <WhiteSpace/>
        <Button style={styles.btn} type='ghost'
        onPress={() => this.props.navigation.navigate('Register')}>注册新账户</Button>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        </WingBlank>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // justifyContent: 'center',
      // alignItems: 'center',
      width:widthW,
      marginTop: 100,
    },
    textSy:{
      fontSize: 50,
      marginBottom: 50,
      marginLeft: 150,
    },
    btn:{
      // width:300,
    },
    btn:{
        // width:300,
    },
    ButtonSty:{
      width:30,
      height:30,
      margin: 10,
    }
  });