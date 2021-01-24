import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import GridView from '../components/GridView';

let deviceWidth = Dimensions.get('window').width;

const DATA = [
  {
    id: 1,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 2,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 3,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 4,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 5,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 6,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 7,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 8,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 9,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 10,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
    type: 'video',
  },
  {
    id: 11,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
    type: 'video',
  },
  {
    id: 12,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 13,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 14,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 15,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 16,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 17,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 18,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 19,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 20,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    type: 'photo',
  },
  {
    id: 21,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?cs=srgb&dl=pexels-oleg-magni-1837591.jpg&fm=jpg',
    type: 'photo',
  },
  {
    id: 22,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 23,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 24,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 25,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 26,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 27,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 28,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
    type: 'video',
  },
  {
    id: 29,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
    type: 'video',
  },
  {
    id: 30,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 31,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 32,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 33,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 34,
    name: 'Bu benim fotografim',
    exp: 'Cemre',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 35,
    name: 'Bu benim video',
    exp: 'Ceren',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
  {
    id: 36,
    name: 'Bu benim fotografim',
    exp: 'Meric',
    comment: 'View 1 Comment',
    year: 2010,
    url:
      'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
    type: 'photo',
  },
];

const Item = ({url}) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: url,
      }}
      style={{
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
      }}
    />
  </View>
);

{
  /* const handleSearch = (name) => {
  let text = name.toLowerCase();

  let filteredName = name.filter((item) => {
    return item.name.toLowerCase().match(text);
  });
  if (!text || text === '') {
    this.setState({
      data: initial,
    });
  } else if (!Array.isArray(filteredName) && !filteredName.length) {
    // set no data flag to true so as to render flatlist conditionally
    this.setState({
      noData: true,
    });
  } else if (Array.isArray(filteredName)) {
    this.setState({
      noData: false,
      data: filteredName,
    });
  }
};
*/
}

const Item2 = ({url}) => (
  <View style={styles.item}>
    <Video
      source={{uri: url}} // Can be a URL or a local file.
      resizeMode="cover"
      repeat // Callback when video cannot be loaded
      style={{
        alignItems: 'center',
        marginTop: 0,
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
      }}
    />
  </View>
);
{
  /*
function renderHeader() {
  const [query, setQuery] = useState('');
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
        onChangeText={(queryText) => handleSearch(queryText)}
        placeholder="Search"
        style={{backgroundColor: '#fff', paddingHorizontal: 20}}
      />
    </View>
  );
}
*/
}

const App = () => {
  {
    return <GridView DATA={DATA} Item={Item} Item2={Item2} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 0,
    borderColor: 'black',
    borderWidth: 2,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 12,
  },
});

export default App;
