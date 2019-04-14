/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableNativeFeedback} from 'react-native';
import Two from './Two';

export default class One extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'上海',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Two', {
                    name: this.state.city,
                    callBack: (data) => {
                        this.setState({
                            city: data
                        })
                    }
                })}>
                    <Text style={styles.welcome}>点击：传数据给页面Two,页面Two在传回来</Text>
                </TouchableNativeFeedback>

                <Text style={styles.welcom2}>{this.state.city}</Text>

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
        padding:20,
        borderRadius:10,
        color:'#fff',
    },
    welcom2: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});

