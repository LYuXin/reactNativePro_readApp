import React, { Component } from 'react'
import {StyleSheet,  View, Text,ScrollView,TextInput } from 'react-native';
import Search from '../../commen/shujia/search';
import PropTypes from 'prop-types'
export class Header extends Component {
  static propTypes={
    // style:View.propTypes.style,
    title:PropTypes.string,
    titleView:PropTypes.element,
    hide:PropTypes.bool,
    leftButton:PropTypes.element,
    rightButton:PropTypes.element
}
  constructor(props) {
    super(props);
    this.state = { 
      title:'',
      hide:false };
  }
  render() {
        let con =this.props.titleView?
        <View>{this.props.titleView}</View>:
        <View style={styles.mainSty}>
        {this.props.leftButton}
        <Text style={styles.titleSty}>{this.props.title}</Text>
        {this.props.rightButton}
        </View>
    return (
        
        <View style={{ backgroundColor: '#ffffff'}}>
        {con}
        </View>
    )
  }
}
Header.defaultProps={
      leftButton:<View></View>,
      title:''
}
export default Header
const styles = StyleSheet.create({
  mainSty:{
    // flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row',
  },
  titleSty:{
    justifyContent:'center',
    alignItems: 'center',
    position:"absolute",
    left:180,
    right:40,
    fontSize:20
  }
});