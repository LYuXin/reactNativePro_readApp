import React from 'react';
import { ScrollView, Text, View ,Image} from 'react-native';
import { Grid, WingBlank, WhiteSpace } from '@ant-design/react-native';
const GirlListData=[
    {
      icon:<Image source={require('../../commen/shujia/books/book7.png')} style={{width:70,height:100}}/>,
      text:'济南的冬天'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book8.png')} style={{width:70,height:100}}/>,
      text:'消失的地平线'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book9.png')} style={{width:70,height:100}}/>,
      text:'牛虻'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book4.png')} style={{width:70,height:100}}/>,
      text:'浮生六记'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book5.png')} style={{width:70,height:100}}/>,
      text:'活着'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book6.png')} style={{width:70,height:100}}/>,
      text:'梦里花落知多少'
    },
  ]
const data = GirlListData.map((val, i) => ({
    icon: val.icon,
    text: val.text,
  }));
export default class ChangXiao extends React.Component {
  render() {
    return (
      <ScrollView>
        <WhiteSpace/>
        <WingBlank>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around',}}>
        <Text style={{flex:5,fontWeight:'bold',fontSize: 19,}}>热门畅销</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around',}}>
          <Text>查看更多</Text>
        <Image source={require('../../Images/右箭头.png')} style={{width:20,height:20}}/>
        </View>
        </View>
        </WingBlank>
        <Grid
          data={data}
          columnNum={3}
          hasLine={false}
          itemStyle={{ height: 150}}/>
      </ScrollView>
    );
  }
}