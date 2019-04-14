import React, {Component} from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Page from '../../commen/page'
import Page1 from '../../commen/page1'
import Page2 from '../../commen/page2'
import Page3 from '../../commen/page3'
const Item = TabNavigator.Item
class Botton extends Component {
  /*初始化state*/
  constructor(props){
      super(props);
      this.state={
        selectedTab:'tb_msg',
      }
  }
  tabNavigatorItems(selectedTab,title,icon,selectedIcon,imageStyle,mark,viewContent){
    
      return (
          <Item
              selected={this.state.selectedTab === selectedTab }
              title={title}
              renderIcon={()=> <Image style={styles.myImage} source={icon}/> }
              renderSelectedIcon={()=> <Image style={[styles.myImage,{tintColor:imageStyle}]} source={selectedIcon}/> }
              badgeText={mark}
              onPress={()=> {this.setState({selectedTab:selectedTab})} }>
              <View style={{flex:1}}>{viewContent==='Page1'?<Page1/>:null}
                                     {viewContent==='Page'?<Page/>:null}
                                     {viewContent==='Page2'?<Page2/>:null}      
                                     {viewContent==='Page3'?<Page3/>:null}          
              </View>
          </Item>
      )
  }
 
  render() {
    return (
      <View style={styles.container}>
         <TabNavigator>
            {this.tabNavigatorItems('tb_msg',"消息",require('../../Images/bell1.png'),require("../../Images/bell.png"),'#1296db',"1",'Page')}
            {this.tabNavigatorItems('tb_contacts',"联系人",require('../../Images/tasks1.png'),require("../../Images/tasks.png"),'#1296db',"",'Page1')}
            {this.tabNavigatorItems('tb_watch',"看点",require('../../Images/chat1.png'),require("../../Images/chat.png"),'#1296db',"",'Page2')}
            {this.tabNavigatorItems('tb_dynamic',"动态",require('../../Images/user1.png'),require("../../Images/user.png"),'#1296db',"",'Page3')}
         </TabNavigator>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    myImage:{
        width:22,
        height:22,
    }
});
 
export default connect()(Botton)