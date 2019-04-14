import React, { Component } from 'react'
import {StyleSheet, View,Text,Image} from 'react-native';
import HJMe from './mypage/HJMe'
import TopView from './mypage/TopView'
import Header from '../component/header/header';
export default class PageMyList extends Component {
  static navigationOptions = ({navigation,navigationOptions }) => {
    console.log(navigation)
    return {
        headerTitle: <Header
        title="个人中心" 
        leftButton={<Image source={require('../Images/设置.png')} style={styles.ButtonSty}/>}
        />,
    };
};
  render() {
    return (
      <View>
        
        <TopView  navigation= {this.props.navigation}/>
        <HJMe  navigation= {this.props.navigation}/>  
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