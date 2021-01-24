import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Search = ({onPress}) => (
  <View
    style={{
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 50,
      marginBottom: 20,
    }}>
    <Text> Click Search Icon for Grid Search</Text>
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{
          uri:
            'https://icon-library.com/images/black-search-icon-png/black-search-icon-png-12.jpg',
        }}
        style={{width: 50, height: 50}}
      />
    </TouchableOpacity>
  </View>
);
export default Search;
