import React, { Component } from 'react';
import { StyleSheet,TextInput, Text, View, Image, Dimensions,ScrollView } from 'react-native';

var Bookdata = require('./book.json');
import bookLJ from './bookLJ'
import PageBook from '../pageBook';
import { Button } from '@ant-design/react-native';
//屏幕的宽度
const width = Dimensions.get('window').width;
//定义一些全局的变量
const cols = 3;
const boxW = 100;
const vMargin = (width - cols * boxW) / (cols + 1);
const hMargin = 25;

class BookList extends Component {
    constructor(props){
        super(props)
        this.state={
            inputdata:''
        }
    }
  static navigationOptions = {
    headerTitle: "发现"
  };
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>
      {Bookdata.map((item,index)=>{
        return (
        <View key={index} style={styles.outViewStyle} onPress={(_el, index) => alert(this.key)}>
              <Image
               source={bookLJ[item.title]}
                style={{width: 80,
                    height: 100,
                    marginBottom: 5}}
              ></Image>
              <Text style={styles.mainTitleStyle} 
               onPress={() =>this.props.navigation.navigate('PageBook',{...item})}
              >
                {item.title}
              </Text>
            </View>
            )
        })}
      </View></ScrollView>
    );
  }
}
export default BookList
//设置样式
const styles = StyleSheet.create({
    container: {
      //    确定主轴的方向
      flexDirection: 'row',
      //    一行显示不完的话换行显示
      flexWrap: 'wrap',
      //    换行以后,
      backgroundColor: '#fff',
      height:'100%',
   
      marginBottom:30
    },
    outViewStyle: {
      //    设置侧轴的对齐方式
      alignItems: 'center',
      width: boxW,
      height: boxW,
      marginLeft: vMargin,
      marginTop: hMargin
    },
    iconStyle: {
      width: 80,
      height: 100,
      marginBottom: 5
    },
    inputSty:{
        marginTop:20,
        marginLeft:20,
        width: 300,
        // height: 30,
        // marginBottom: 5,
        backgroundColor:'#fff',
        borderRadius: 10,
    }
  });