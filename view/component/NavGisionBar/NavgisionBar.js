import React, {Component} from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
const HEIGHT=50
export default class NavgisionBar extends Component{
    static propTypes={
        style:View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element
    }
    constructor(props){
        super(props);
        this.state={
            title:'',
            hide:false
        }
    }
    render(){
        let titleView=this.props.titleView?this.props.titleView:<Text>{this.props.titleView}</Text>
        let content=<View>{this.props.leftButton}{titleView}{this.props.rightButton}</View>
        return (
            <View style={styles.contain}>{content}</View>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'gray'
    }
});