import React from 'react';
import { View ,ScrollView} from 'react-native';
import { Tabs } from '@ant-design/react-native';
import ReadList from '../PingLunList/ReadList';
import GuanZhu from '../guanzu/GuanZhu';
export default class BasicTabsExample extends React.Component {
  render() {
    const tabs = [
      { title: '关注' },
      { title: '热评' },
      { title: '我的评论' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    };
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}>
          <View style={style}>
          <ScrollView>
          <ReadList/>
          <GuanZhu/>
          </ScrollView>
          </View>
          <View style={style}>
          <ReadList/>
          </View>
          <View style={style}>
          <ReadList/>
          </View>
        </Tabs>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';