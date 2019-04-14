// tslint:disable:no-empty
import React from 'react';
import { Image, ScrollView, View,Text } from 'react-native';
import { List } from '@ant-design/react-native';
import paiiming from'./paiiming'
const Item = List.Item;
const Brief = Item.Brief;
var time = require('./time.json');
export default class PaiMing extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={'好友排名'}/>
      
      {time.map((item,index)=>{
        return(
          <List key={index}>
          <Item thumb={<Image source={paiiming[item.username]} style={{marginRight:20}}/>}
         
            extra={
              <View style={{}}>
              <Text style={{width:85 }}>{index}</Text>
              </View>
            }
            ><View style={{flex:1,flexDirection:'row',alignItems: 'center',}}>
            {console.log(item.header)}
            <Text style={{marginRight:10}}>{item.username}</Text>
            {index===0?<Image source={require('../../Images/第一名.png')} style={{ width: 29, height: 29 }} />:null }
            {index===1?<Image source={require('../../Images/第二名.png')} style={{ width: 29, height: 29 }} />:null }
            {index===2?<Image source={require('../../Images/第三名.png')} style={{ width: 29, height: 29 }} />:null }
            {index>2?<Image source={require('../../Images/喜欢.png')} style={{ width: 23, height: 23,marginLeft:229}}/>
            :<Image source={require('../../Images/喜欢.png')} style={{ width: 23, height: 23,marginLeft:200,tintColor:'red'}}/> }            
            </View>
            
            </Item>
        </List>
        
        )
      })}
      </ScrollView>
    );
  }
}