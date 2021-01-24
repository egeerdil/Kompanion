import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../components/CustomButton';

export default function ProfileScreen() {
  function MyBackButton() {
    const navigation = useNavigation();

    return (
      <AppButton
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <MyBackButton />
    </View>
  );
}
