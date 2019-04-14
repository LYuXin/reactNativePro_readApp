import React, {Component} from 'react';
import {Platform, StyleSheet,Image, Text, View,ScrollView} from 'react-native';
let Dimensions=require('Dimensions');
let {width}=Dimensions.get('window');
var localImg=[
    require('../../commen/shujia/books/book1.png'),
    require('../../commen/shujia/books/book11.png'),
    require('../../commen/shujia/books/book12.png'),
    require('../../commen/shujia/books/book13.png'),
    require('../../commen/shujia/books/book1.png'),
];
class LunBo extends Component{
    //定义默认属性duration循环时间值，默认1秒
    static defaultProps={
        duration:1000
    }
    constructor(props){
        super(props);
        //当前页数
        this.state={
            currentPage:0
        };
      }
      //组件渲染完时启动定时器
      componentDidMount(){
          this.startTimer();
      }
      //组件拖拽时停止定时器
      _onScrollBeginDrag(){
        clearInterval(this.timer);
      }
      //拖拽结束时启动定时器
      _onScrollEndDrag(){
          this.startTimer();
      }
      //定时器函数
    startTimer(){
        //获取scrollview
        let scrollViewer=this.refs.scrollView;
        //获取图片数量
        let imageCount=localImg.length+1;
        //设置定时器,和设置圆点
        let activePage=0;
        this.timer=setInterval(()=>{
            //判断实现页面和圆点切换
            if(activePage>=imageCount-2){
                activePage=0;
            }else{
                activePage++;
            }
            this.setState({
                currentPage:activePage
            });
            //实现滚动
            let offsetX=activePage*width;
            if(this.state.currentPage>=imageCount-2){
              scrollViewer.scrollTo({x: 0, y:0, animated:false});
            }else{
              scrollViewer.scrollTo({x: offsetX, y:0, animated:true});
            }
        },this.props.duration);
    }
    //创建圆点
    renderPageIndex(){
        let array=[];
        let length=localImg.length;
        var style;
        for(var i=0;i<length-1;i++){
            if(i===0){
                style = (i==this.state.currentPage||this.state.currentPage==length) ? {color: 'orange'} : {color: '#E8E8E8'}
                array.push(
                    <Text key={i} style={[{fontSize:30},style]}>•</Text>
                )
            }
                else{style = (i==this.state.currentPage) ? {color: 'orange'} : {color: '#E8E8E8'}
                array.push(
                    <Text key={i} style={[{fontSize:30},style]}>•</Text>
                )}
        }
        return array;
    }
 
    render(){
        return(
            <View style={styles.circulateViewStyle} > 
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    //当用户开始拖动此视图时调用此函数
                    onScrollBeginDrag={(e)=>this._onScrollBeginDrag(e)}
                    //当用户停止拖动此视图时调用此函数。
                    onScrollEndDrag={(e)=>this._onScrollEndDrag(e)}
                    //滚动动画结束时调用此函数。
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                {localImg.map((url,index)=>(
                    <Image key={index} source={url} style={{width: width, height: 500}} />
                ))}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {/*返回4个圆点*/}
                    {this.renderPageIndex()}
                </View>
            </View>
            
        )    
      
    }  
        
    //滚动动画结束时
        onAnimationEnd(e){
            // 1.求出水平方向的偏移量
            var offsetX = e.nativeEvent.contentOffset.x
            // 2.求出当前的页数         floor函数 取整
            var currentPages =Math.floor(offsetX / width);
                console.log(this.state.currentPage)
            // 3.更新状态机
            this.setState({
                currentPage:currentPages
            });
            console.log(this.state.currentPage)
        }
}
const styles=StyleSheet.create({
    
    circulateViewStyle: {
        height:150,
        width:width,
    },
    creatItem:{
        flexDirection:'row',
        width:width,
        height:100
    },
    item:{
        flexDirection:'row',
        width:width,
        height:50
    },
    pageViewStyle: {
        width:width,
        height:25,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    }
})
export default LunBo;
