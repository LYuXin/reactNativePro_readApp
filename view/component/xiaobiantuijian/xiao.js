import React from 'react';
import { ScrollView, Text, View ,Image} from 'react-native';
import { Grid, WingBlank, WhiteSpace } from '@ant-design/react-native';
const GirlListData=[
    {
      icon:<Image source={require('../../commen/shujia/books/book1.png')} style={{width:70,height:100}}/>,
      text:'华氏451'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book2.png')} style={{width:70,height:100}}/>,
      text:'明朝那些事儿'
    },
    {
      icon:<Image source={require('../../commen/shujia/books/book3.png')} style={{width:70,height:100}}/>,
      text:'北欧众神'
    }
  ]
const data = GirlListData.map((val, i) => ({
    icon: val.icon,
    text: val.text,
  }));
export default class Xiao extends React.Component {
  render() {
    return (
      <ScrollView>
        <WhiteSpace/>
        <WingBlank>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'space-around',}}>
        <Text style={{flex:5,fontWeight:'bold',fontSize: 19,}}>小编荐书</Text>
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