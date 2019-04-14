import React, { Component } from 'react'
import {StyleSheet, View,Text,Image,ScrollView} from 'react-native';
import { WingBlank,WhiteSpace } from '@ant-design/react-native';
import BookHeader from '../component/header/BookHeader';
import PingLunList from '../component/PingLunList/PingLunList';
import Header from '../component/header/header';
export default class PageBook extends Component {
  render() {
    return (
    <View>
      {/* <Header 
        leftButton={<Image source={require('../Images/左箭头.png')} style={styles.ButtonSty}/>}
        rightButton={<Image source={require('../Images/分享.png')} style={styles.ButtonSty}/>}
        /> */}
        <ScrollView>
      <BookHeader title={this.props.navigation.getParam('title','书籍')}
                  writer={this.props.navigation.getParam('writer','书籍')}
                  introduction={this.props.navigation.getParam('introduction','书籍')}
      />
      <WhiteSpace style={{backgroundColor:'#cdcdcd'}}/>
      <Text style={{fontWeight:'bold',fontSize: 20,margin:10,}}>精彩点评</Text>
      <PingLunList></PingLunList>
      </ScrollView>
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