import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

const GridView = ({DATA, Item, Item2}) => {
  const renderItem = ({item}) => {
    if (item.type === 'photo') {
      return <Item url={item.url} />;
    } else if (item.type === 'video') {
      return <Item2 url={item.url} />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // ListHeaderComponent={renderHeader}
        data={DATA}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default GridView;
