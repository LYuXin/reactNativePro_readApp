import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
// 导入数据
var MiddleData = require('./MiddleData.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class MiddleView extends Component {
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
        for(var i = 0; i < MiddleData.length; i++) {
            // 取出单个对象
            var Itemdata = MiddleData[i];
            console.log(Itemdata.iconName)
            if(Itemdata.iconName==='目录.png')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/目录.png')} title={Itemdata.title} />)
            if(Itemdata.iconName==='评论.png')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/评论.png')} title={Itemdata.title} />)
            if(Itemdata.iconName==='加入.png')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/加入.png')} title={Itemdata.title} />)
            if(Itemdata.iconName==='购买.png')
            ItemArr.push(<InnerView key={i} iconName={require('../../Images/购买.png')} title={Itemdata.title} />)
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
    },

    innerViewStyle: {
        width:width/4,
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

module.exports = MiddleView;