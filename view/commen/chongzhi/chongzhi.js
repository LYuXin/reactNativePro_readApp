import React from 'react';
import { Text, View ,Image} from 'react-native';
import { Card,WingBlank,Button,List } from '@ant-design/react-native';
const Item = List.Item;
let wordList=[{word:"已购内容"},{word:"交易记录"},{word:"赠送记录"},{word:"自动购买"},{word:"赠送好友得无限卡"},]
export default class ChongZhi extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Body>
              <View style={{ }}>
                <Text style={{ marginLeft: 16,fontSize:30,fontWeight:'bold',marginLeft:145 }}>30.00</Text>
                <Button type='primary' style={{width:300,marginLeft:38}}>充值</Button>
              </View>
            </Card.Body>
            <Card.Footer
              content="充值：0元"
              extra="兑换：31元"
            />
          </Card>
        </WingBlank>
        <List renderHeader={'账户相关'}></List>
        {wordList.map((item,index)=>{
          return (
            <List>
          <Item extra={<Image source={require('../../Images/右箭头.png')} style={{width:25,height:25 }}/>} >
          <View>
            <Text style={{marginRight:10}}>{item.word}</Text>
            </View>
            </Item>
        </List>
          )
        })}
      </View>
    );
  }
}