import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

const PostView = ({posts}) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      {posts.map((p) => {
        if (p.type === 'photo') {
          return (
            <View style={styles.slide3}>
              <ImageBackground
                source={{uri: p.url}}
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').width,
                }}
              />
            </View>
          );
        } else if (p.type === 'video') {
          return (
            <Video
              source={{uri: p.url}} // Can be a URL or a local file.
              resizeMode="cover"
              repeat // Callback when video cannot be loaded
              style={{
                alignItems: 'center',
                marginTop: 0,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
              }}
            />
          );
        }
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {height: Dimensions.get('window').width, marginVertical: 10},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  stretch: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
});

export default PostView;
