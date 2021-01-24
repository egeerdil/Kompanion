import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

function renderHeader() {
  const [query, setQuery] = useState('');
  const [text, onChangeText] = useState('');
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 20,
      }}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Search"
        style={{backgroundColor: '#fff', paddingHorizontal: 20}}
      />
    </View>
  );
}
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
        ListHeaderComponent={renderHeader}
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
