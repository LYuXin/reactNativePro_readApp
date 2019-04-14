import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import One from './One';
import Two from './Two';


/**
 * 最外层的路由
 * 把下面三个 tab 加上了图片
 * 影院里面写了一个列表，刷新，加载
 * 我的，地址，传递数据，切换城市
 *
 */

export default createStackNavigator(
    {
        One:{
            screen:One,
            navigationOptions:{
                title:'电影列表',
                headerTitleStyle:{flex: 1,textAlign:'center'},
                //隐藏标题
                // header:null,
            }
        },
        Two:{
            screen:Two,
            navigationOptions:{
                title:'电影详情',
                headerTitleStyle:{flex: 1,textAlign:'center'},
            }
        },
    }
);