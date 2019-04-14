import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace,Switch } from '@ant-design/react-native';

export default class App extends React.Component {
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
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewSty:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
  }
});