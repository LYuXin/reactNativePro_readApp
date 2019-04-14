import React from 'react';
import { ScrollView, StyleSheet, Text, View ,Image,Dimensions } from 'react-native';
import { Button, Drawer, List, WhiteSpace,Switch} from '@ant-design/react-native';

var wwidth= Dimensions.get('window').width;
var wheight= Dimensions.get('window').height;
export default class ChouTi extends React.Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      console.log('是否打开了 Drawer', isOpen.toString());
    };
    this.onSwitchChange = value => {
      this.setState({
        checked: value,
      });
    };
    this.onNightSwitchChange = value => {
      this.setState({
        night: value,
      });
    };
    this.state = {
      checked: false,
      night:false
    };
  }

  render() {
      const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>
        <List.Item thumb="https://gw.alipayobjects.com/zos/rmsportal/wdrKbZvhtQOnoGuuofic.png" multipleLine >
            <View style={styles.ViewSty}>
              <Text>设置页面</Text>
            </View>
        </List.Item>
        </List>
        <WhiteSpace/>
        <List>
        <List.Item thumb="https://gw.alipayobjects.com/zos/rmsportal/wdrKbZvhtQOnoGuuofic.png">书籍排序方式</List.Item>
        </List>
        <List>
        <List.Item thumb="https://gw.alipayobjects.com/zos/rmsportal/wdrKbZvhtQOnoGuuofic.png"
          extra={
            <Switch
              checked={this.state.checked}
              onChange={this.onSwitchChange}
            />
          }
        >阅读时横屏</List.Item>
        <List.Item thumb="https://gw.alipayobjects.com/zos/rmsportal/wdrKbZvhtQOnoGuuofic.png">字体设置</List.Item>
        <List.Item thumb="https://gw.alipayobjects.com/zos/rmsportal/wdrKbZvhtQOnoGuuofic.png"
         extra={
          <Switch
            checked={this.state.night}
            onChange={this.onNightSwitchChange}
          />
        }
        >夜间模式</List.Item>
        </List>
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="right"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
      <View>
      
        <Button onPress={()=>{this.openChouTi()}} style={styles.btn}>
        <Image source={require('../../Images/右箭头.png')} style={styles.imgsty}/>
        </Button>
      </View>
      </Drawer>
    );
  }
  openChouTi(){
    this.drawer && this.drawer.openDrawer()
}
}

const styles = StyleSheet.create({
  container: {
    width:wwidth,
    height:wheight
  },
  ViewSty:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
  },
  btn:{
    backgroundColor:require('../../Images/右箭头.png'),
    width:50,
    height:50,
    padding: 0,
    backgroundColor:'#fff',
    borderColor: '#fff',
  },
  imgsty:{
    width:20,
    height:20
  }
});