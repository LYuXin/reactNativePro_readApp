import React from 'react';
import { Text, View  ,Image,StyleSheet,ScrollView} from 'react-native';
import { Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
export default class PingLunList extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.PingLunList=[
      {userName:'李白',touxiang:require('../../Images/头像7.png'),title:"围城读后感",pinglun:'《围城》是钱钟书所著的长篇小说。第一版于1947年由上海晨光出版公司出版。1949年之后，由于政治等方面的原因，本书长期无法在中国大陆和台湾重印，仅在香港出现过盗印本。1980年由作者重新修订之后，在中国大陆地区由人民文学出版社刊印。此后作者又曾小幅修改过几次。《围城》 自从出版以来，就受到许多人的推崇。由于1949年后长期无法重印，这本书逐渐淡出人们的视野。1960年代，旅美汉学家夏志清在《中国现代小说史》(A History of Modern Chinese Fiction)中对本书作出很高的评价，这才重新引起人们对它的关注。人们对它的评价一般集中在两方面，幽默的语言和对生活深刻的观察。从1990年代开始，也有人提出对本书的不同看法，认为这是一部被“拔高”的小说，并不是一部出色的作品。很多人认为这是一部幽默作品。除了各具特色的人物语言之外'},
      {userName:'杜甫',touxiang:require('../../Images/头像3.png'),title:"边城读后感",pinglun:'《边城》是沈从文的代表作，写于一九三三年至一九三四年初。这篇作品如沈从文的其他湘西作品，着眼于普通人、善良人的命运变迁，描摹了湘女翠翠阴差阳错的生活悲剧，诚如作者所言：“一切充满了善，然而到处是不凑巧。既然是不凑巧，因之素朴的善终难免产生悲剧。”'},
      {userName:'孟浩然',touxiang:require('../../Images/头像4.png'),title:"秘密读后感",pinglun:'一场车祸改变了杉田平介平淡而幸福的家庭生活。妻子直子不幸身亡，女儿藻奈美奇迹般苏醒后，平介却发现她的身体里住着的是直子的灵魂……平介该如何应对这种“亦妻亦女”的奇妙家庭关系呢？他们的人生又将走向何方？'},
      {userName:'刘禹锡',touxiang:require('../../Images/头像2.png'),title:"红楼梦读后感",pinglun:'《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经 典。'},
    ]
  }
  render() {
    return (
      <ScrollView>
        {this.PingLunList.map((item,index)=>{
          return(<View key={index}>
          <WhiteSpace size="lg" />
          <Card full>
            <Card.Header
              title={item.userName}
              thumbStyle={{ width: 30, height: 30 }}
              thumb={<Image source={item.touxiang} style={{marginRight:10}}/>}
              extra={item.title}
            />
            <Card.Body>
              <View style={{ height: 92 }}>
                <Text style={{ marginLeft: 16,height:80 }}>
                {item.pinglun}
                </Text>
              </View>
            </Card.Body>
            <Card.Body>
              <View style={styles.contain}>
              <Image source={require('../../Images/分享.png')} style={styles.iconSty}/>
              <Image source={require('../../Images/喜欢.png')} style={styles.iconSty}/>
              <Image source={require('../../Images/评价.png')} style={styles.iconSty}/>
              </View>
            </Card.Body>
          </Card>
          </View>)
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contain:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconSty:{
    width:30,
    height:30
  }
});