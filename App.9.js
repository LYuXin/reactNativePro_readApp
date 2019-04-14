import React from 'react';
import { ScrollView, Text, View,Image,StyleSheet } from 'react-native';
import { Grid ,Button,Modal,Provider} from '@ant-design/react-native';
const GirlListData=[
  {
    icon:<Image source={require('./view/Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('./view/Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('./view/Images/头像1.png')}/>,
    text:'张三'
  },
  {
    icon:<Image source={require('./view/Images/头像2.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像3.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像4.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像5.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像6.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像7.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像8.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像9.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像10.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像11.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像12.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像13.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像14.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像15.png')}/>,
    text:'name1'
  },
  {
    icon:<Image source={require('./view/Images/头像12.png')}/>,
    text:'name1'
  },
]
const data = GirlListData.map((val, i) => ({
  icon: val.icon,
  text: val.text,
}));
export default class BasicGridExample extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = () => {
      Modal.alert('Title', 'alert content', [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
        },
        { text: 'OK', onPress: () => console.log('ok') },
      ]);
    };
  }
  render() {
    return (
      <Provider>
      <ScrollView>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          hasLine={false}
          itemStyle={styles.itemStyleSty}
          renderItem={(val,index)=>{
            return (
              <View style={styles.constain}>
              <Image source={require('./view/Images/头像1.png')}/>
              <Text>{val.text}</Text>
              <Button style={styles.buttonSty} onPress={this.onButtonClick}>
              <Text style={{fontSize:11,color:'#1296db'}}>关注</Text></Button>
              </View>
            )
          }}
          onPress={(_el, index) => alert(index)}
        />
      </ScrollView></Provider>
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
    borderTopColor: '#f0f0ff',

  }
});