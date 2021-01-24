import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

const UpperPost = () => (
  <View style={{flex: 1, flexDirection: 'row'}}>
    <Image
      source={{
        uri:
          'https://pbs.twimg.com/profile_images/1283889148210876417/M8rRDH_N_400x400.jpg',
      }}
      style={{width: 50, height: 50, borderRadius: 25}}
    />
    <View>
      <Text
        style={{
          paddingLeft: 10,
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 0,
        }}>
        egeerdil
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          color: 'white',

          marginBottom: 0,
        }}>
        İstanbul Türkiye
      </Text>
    </View>
  </View>
);
export default UpperPost;
