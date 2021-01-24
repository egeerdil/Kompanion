import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

const LowerPost = ({exp, name, comment}) => (
  <View>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text
        style={{
          paddingLeft: 10,
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 0,
        }}>
        {' '}
        {exp}
      </Text>
      <Text style={{color: 'white', marginBottom: 0}}> {name}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{paddingLeft: 15, color: 'gray', marginBottom: 30}}>
        {comment}
      </Text>
    </View>
  </View>
);
export default LowerPost;
