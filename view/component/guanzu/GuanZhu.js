import React from 'react';
import { ScrollView, Text, View,Image,StyleSheet } from 'react-native';
import { Grid ,Button,Modal,Provider} from '@ant-design/react-native';
const GirlListData=[
  {
    icon:<Image source={require('../../Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('../../Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('../../Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('../../Images/头像2.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像3.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像4.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像5.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像6.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像7.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像8.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像9.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像10.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像11.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像12.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像13.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像14.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像15.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('../../Images/头像12.png')}/>,
    text:'name1'
  },
]
const data = GirlListData.map((val, i) => ({
  icon: val.icon,
  text: val.text,
}));
export default class GuanZhu extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = () => {
      Modal.alert('确认关注该用户吗？', '', [
        {
          text: '取消',
          onPress: () => console.log('cancel'),
        },
        { text: '确认', onPress: () => console.log('ok') },
      ]);
    };
  }
  render() {
    return (
      <Provider>
        <Text style={{height:20,backgroundColor:'#cdcdcd'}}>好友推荐</Text>
      <ScrollView>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          carouselMaxRow={1}
          hasLine={false}
          itemStyle={styles.itemStyleSty}
          renderItem={(val,index)=>{
            return (
              <View style={styles.constain}>
              {val.icon}
              <Text>{val.text}</Text>
              <Text style={{fontSize:11,color:'#1296db',marginTop:10}}>
              <Image source={require('../../Images/加号.png')} style={{width:20,height:20}}/>
              关注</Text>
              </View>
            )
          }}
          onPress={(_el, index) => alert('已关注')}
        />
      </ScrollView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  itemStyleSty:{
    backgroundColor:'#f0f0f0',
    borderColor: '#fff',
    borderWidth: 15,
    borderLeftWidth:20,
    borderRightWidth: 20,
  },
  constain:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSty:{
    width:90,
    height:20,
    backgroundColor:'#f0f0f0',
    marginTop: 20,
    borderColor:'#f0f0f0',
    borderTopColor: '#f0f0ff'
  }
});