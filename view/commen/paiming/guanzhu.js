// tslint:disable:no-empty
import React from 'react';
import { Image, ScrollView, View,Text } from 'react-native';
import { List ,Tabs,Button} from '@ant-design/react-native';
import paiiming from'./paiiming'
import PaiMing from './PaiMing'
const Item = List.Item;
const Brief = Item.Brief;
var time = require('./time.json');
export default class GuanZhu extends React.Component {
  render() {
    const tabs = [
      { title: '我的关注' },
      { title: '粉丝' },
    ];
    const style = {
      // alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#fff',
    };
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}>
          <View style={style}>
          <ScrollView
                style={{ backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >
              {time.map((item,index)=>{
                return(
                  <List key={index}>
                  <Item thumb={<Image source={paiiming[item.username]} style={{marginRight:20}}/>}
                    ><View style={{flex:1,flexDirection:'row',alignItems: 'center',}}>
                    {console.log(item.header)}
                    <Text style={{marginRight:10}}>{item.username}</Text>
                    <Button type="primary" size="small" style={{marginLeft:200}}>已关注          </Button>
                    <Image source={require('../../Images/对勾.png')} style={{ width: 18, height: 18,marginLeft:-25,tintColor:'#FFF'}}/>            
                    </View>
                    </Item>
                </List>
                )
              })}
              <List >
                  <Item thumb={<Image source={require('../../Images/头像5.png')} style={{marginRight:20}}/>}
                    ><View style={{flex:1,flexDirection:'row',alignItems: 'center',}}>
                    <Text style={{marginRight:10}}>哈哈</Text>
                    <Button type="primary" size="small" style={{marginLeft:200}}>相互关注       </Button>
                    <Image source={require('../../Images/相互.png')} style={{ width: 18, height: 18,marginLeft:-25,tintColor:'#FFF'}}/>            
                    </View>
                    </Item>
                </List>
              </ScrollView>
          </View>
          <View style={style}>
          <ScrollView
                style={{ backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >
              {time.map((item,index)=>{
                return(
                  <List key={index}>
                  <Item thumb={<Image source={paiiming[item.username]} style={{marginRight:20}}/>}
                    ><View style={{flex:1,flexDirection:'row',alignItems: 'center',}}>
                    {console.log(item.header)}
                    <Text style={{marginRight:10}}>{item.username}</Text>
                    <Button type='ghost' size="small" style={{marginLeft:220}}>关注       </Button>
                    <Image source={require('../../Images/加号.png')} style={{ width: 18, height: 18,marginLeft:-25,tintColor:'#1296db'}}/>            
                    </View>
                    </Item>
                </List>
                )
              })}
              </ScrollView>
          </View>
        </Tabs>
      </View>
     );
  }
}