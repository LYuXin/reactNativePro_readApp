import React,{Component} from 'react'
import {
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Text
}from 'react-native'
import PropTypes from 'prop-types'
export default class Child extends Component{
    constructor(props){
        super(props)
        this.state={
            listData:this.props.listData
        }
    }
    render(){
        return(
            <View>
                <FlatList data={this.state.listData}
                          renderItem={this._renderItem}
                          style={styles.flatList}
                          keyExtractor={(item, index) => 'time' + index}
                          getItemLayout={(data, index) => ({
                              length:40, offset: 40 * index, index
                          })}
                />
            </View>
        )
    }
    _renderItem=({item,index})=>{
        return(
            <TouchableOpacity style={styles.item}
                              onPress={()=>{ this.props._itemSelect(item)}}>
                <Text style={{fontSize:18, color: '#333333'}}>{item}</Text>
            </TouchableOpacity>
        )
    }

    changeListData(){
        this.setState({
            listData:['起床','工作','睡觉']
        })
    }
}

Child.propTypes = {
    _itemSelect:PropTypes.func,
    listData:PropTypes.array
};
Child.defaultProps = {
    _itemSelect:(index)=>{},
    listData:[]
};

const styles = StyleSheet.create({
    flatList:{
        backgroundColor:'#f0f0f0',
    },
    item:{
        paddingHorizontal:24,
        height: 40,
        justifyContent:'center'
    }
})
