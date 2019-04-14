/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableNativeFeedback} from 'react-native';


export default class Two extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'北京',
        }


    }


    render() {
        // this.props.navigation.state.params.name;   上个页面传过来的name
        // this.props.navigation.state.params.callBack('北京'); 上个页面传过来的方法，传参数过去
        // this.props.navigation.goBack(); 返回上一页

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{'传过来：'+this.props.navigation.state.params.name}</Text>
                <TouchableNativeFeedback
                    onPress={() => {
                        this.props.navigation.state.params.callBack(this.state.city);
                        this.props.navigation.goBack();
                    }}
                >
                    <View>
                        <Text style={styles.welcome}>{'传回去：'+this.state.city}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#0099FF',
        padding: 20,
        borderRadius: 10,
        color: '#fff',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',

    },

});

