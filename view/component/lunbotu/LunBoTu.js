import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Carousel } from '@ant-design/react-native';
export default class LunBoTu extends React.Component {
  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          selectedIndex={2}
          autoplay
          infinite>
          <View style={[styles.containerHorizontal]}>
            <Image source={require('../../commen/shujia/books/book10.png')}/>
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image source={require('../../commen/shujia/books/book4.png')}/>
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image source={require('../../commen/shujia/books/book5.png')}/>
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image source={require('../../commen/shujia/books/book7.png')}/>
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image source={require('../../commen/shujia/books/book8.png')}/>
          </View>
        </Carousel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});