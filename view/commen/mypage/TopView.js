import React, { Component } from 'react';
// import ChouTi from '../../component/chouti/ChouTi'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Button, Drawer, List, WhiteSpace,Switch } from '@ant-design/react-native';

var Dimensions = require('Dimensions');
var {Screenwidth} = Dimensions.get('window');
export default class MeHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
            </View>
        );
    }
    // 头像 昵称 界面
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <TouchableOpacity  activeOpacity={1.0} onPress={()=>{alert('跳转到修改个人资料!')}}>
                <View style={styles.RightViewStyle}>
                    <Image source={require('../../Images/头像.png')} style={styles.leftIconStyle} />
                    <Text style={{fontSize:18,color:'#8a8a8a',fontWeight:'bold'}}>小白</Text>
                    <Image source={require('../../Images/VIP.png')} style={{width:17,height:17}} />
                 </View>
                 </TouchableOpacity>
                {/* <View>
                <ChouTi style={{width:20,height:20,marginRight:8}}/>
                </View> */}
            </View>
        )
    }
    renderBottomView(){ 
    }
}


const styles = StyleSheet.create({
    container: {
        height:120,
        backgroundColor:'#fff'
    },

    topViewStyle:{
        flexDirection:'row',
        marginTop:30,
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
        marginLeft:20,
        marginRight:20,
    },
    RightViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },
    conterViewStyle:{
        flexDirection:'row',
       width:Screenwidth*0.6,
    },
});

module.exports = MeHeaderView;
