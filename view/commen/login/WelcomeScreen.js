import React, { Component } from 'react'

import {Image, StyleSheet,View,Animated,PropTypes,Text,Dimensions} from 'react-native'
import LoginRegister from './loginRegister'
let widthw=Dimensions.get('window').width;
let heightw=Dimensions.get('window').height;

export default class WelcomeScreen extends Component {
  render(){
    return(
         // <View style={styles.container}>
//              <Image source={require('../shujia/books/book1.png')} style={{width:widthw,height:heightw}}/> 
             <Text style={styles.textSty}>阅</Text>
         // </View>
    )
  }
  //在UI初始化渲染结束后，系统自动调用此函数。主要是用于定时器、网络请求
  componentDidMount(){
    //设置定时器，相隔2s后切换到主页面
    setTimeout(
      ()=>{
        //页面的切换,用到无缝切换函数replace
      // console.log('aa')
      //ok !既然我们需要跳转~那么问题来了~我们需要给组件包装一个导航器。注意：一个APP只有一个导航器，即使导航里面的组件页面又存在导航，系统的diff算法只会认定后面的导航，也就是还是一个导航
      //我们在andorod.js 目录里面给lang 组件包装一个导航器，然后就可以使用下面的函数啦~
      this.props.navigation.navigate('Login')
    },1000);
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      // justifyContent: 'center',
      // alignItems: 'center',
      // width:widthW
    },
    textSty:{
      fontSize:50,
      marginTop: 200,
      marginLeft: 170,
    }
  });