import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import MyCell from './mycell'
export default class HJMe extends Component {
    render() {
        return (
           <ScrollView style={{backgroundColor:'#e8e8e8'}}>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage={require('../../Images/账户.png')}
                       LeftTitle="账户"
                       RightTitle="已购30本书"
                       navigation= {this.props.navigation}
                       navigationWord= 'ChongZhi'
                   />
                   <MyCell
                       LeftImage={require('../../Images/树苗.png')}
                       LeftTitle="无限卡"
                       RightTitle="已累计为你节省109.5元"
                   />
               </View>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage={require('../../Images/大学排名s.png')}
                       LeftTitle="好友排名"
                       RightTitle="第一名"
                       navigation= {this.props.navigation}
                       navigationWord= 'PaiMing'
                   />
                   <MyCell
                       LeftImage={require('../../Images/关注.png')}
                       LeftTitle="关注"
                       RightTitle="12人关注我"
                       navigation= {this.props.navigation}
                       navigationWord= 'GuanZhu'
                   />

               </View>

               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage={require('../../Images/笔记.png')}
                       LeftTitle="笔记"
                   />
               </View>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage={require('../../Images/书籍.png')}
                       LeftTitle="书籍"
                    //    RightImage={require('../Images/new.png')}
                   />
               </View>
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


});

module.exports = HJMe;