import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, 
} from 'react-native';
var FLData = require('./FLData.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ListFL extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.allItems()}
            </View>
        );
    }
    // 所有的items
    allItems() {
        var ItemArr = [];
        //遍历
        for(var i = 0; i < FLData.length; i++) {
            // 取出单个对象
            var Itemdata = FLData[i];
            console.log(Itemdata.iconName)
            if(Itemdata.title==='排行')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/奖杯.png')} title={Itemdata.title} />)
            if(Itemdata.title==='新书')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/书.png')} title={Itemdata.title} />)
            if(Itemdata.title==='特价')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/彩旗.png')} title={Itemdata.title} />)
            if(Itemdata.title==='畅销')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/赞.png')} title={Itemdata.title} />)
            if(Itemdata.title==='选书')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/奖牌勋章.png')} title={Itemdata.title} />)
        }
        // 返回数组
    return ItemArr;
    }
}
// 创建里面组件的类
class InnerView extends React.Component {
    static defaultProps = {
        iconName:'',
        title:'',
        }
    render() {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(this.props.title)}}>
                <View style={styles.innerViewStyle}>
                    <Image source={this.props.iconName} style={styles.ImageStyles}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
    },

    innerViewStyle: {
        width:width/5,
        height:70,
        marginBottom:3,

        alignItems:'center',
        justifyContent:'center',
    },

    ImageStyles: {
        width:30,
        height:30,
        marginBottom:3,
    },
});

module.exports = ListFL;