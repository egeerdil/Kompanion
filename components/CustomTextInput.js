import React from 'react';
import {TextInput} from 'react-native';

const CustomTextInput = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      style={{
        height: 40,
        width: 300,
        borderColor: 'pink',
        borderWidth: 1,
        marginBottom: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
      }}
      onChangeText={(text) => onChangeText(text)}
      placeholder={placeholder}
      placeholderTextColor="white"
      value={value}
    />
  );
};

export default CustomTextInput;
