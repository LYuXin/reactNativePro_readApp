import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace,Switch } from '@ant-design/react-native';

export default class ChouTiList extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      checked: false,
      night:false
    };
  }

  render() {
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