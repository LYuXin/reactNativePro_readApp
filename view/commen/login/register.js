import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,Dimensions} from 'react-native';
import {Button,WingBlank,WhiteSpace,InputItem} from '@ant-design/react-native'
let {widthW}=Dimensions.get('window');
export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      password2:''
    }
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  register=()=>{
    console.log(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textSy}>注册</Text>
        <View style={styles.btn1}>
        <WingBlank>
          <InputItem onChange={val=>{this.handleChange('username',val)}} placeholder="请输入用户名" type="text"> 用户名 </InputItem>
          <InputItem onChange={val=>{this.handleChange('password',val)}} placeholder="请输入密码" type="password"> 密码 </InputItem>
          <InputItem onChange={val=>{this.handleChange('password2',val)}} placeholder="确认密码" type="password">确认密码</InputItem>
        </WingBlank>
        <WingBlank>
        <Button style={styles.btn} type='primary' onPress={this.register}>注册</Button>
        <WhiteSpace/>
        <Button 
        style={styles.btn} 
        type='ghost' 
        onPress={() => this.props.navigation.navigate('Login')}>登录已有账户</Button>
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
  });