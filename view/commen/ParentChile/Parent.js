import React,{Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView

}from 'react-native'

import Child from './Child'

export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedText:'********'
        }
    }
    render(){
        return(
           <SafeAreaView
            style={styles.container}>
               <View style={{flexDirection:'row'}}>
                   <Text style={styles.text}>
                       {this.state.selectedText}
                   </Text>
                   <TouchableOpacity style={styles.btn} onPress={()=>{this.childList.changeListData()}}>
                       <Text>调用子组件的方法</Text>
                   </TouchableOpacity>
               </View>
               <Child ref={(view)=>this.childList=view} listData={['早','中','晚']} _itemSelect={(item)=>{
                   this._showItemText(item)
               }}/>
           </SafeAreaView>
        )
    }

    _showItemText(item){
        this.setState({
            selectedText:item
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        margin:80,
        marginTop:100,
        backgroundColor:'pink',
    },
    btn:{
        margin:80,
        marginTop:100,
        padding:10,
        backgroundColor:'red'
    }
})
