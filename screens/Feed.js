import React, {useState} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {createServer} from 'miragejs';
import PostView from '../components/PostView';
import Search from '../components/Search';
import UpperPost from '../components/UpperPost';
import LowerPost from '../components/LowerPost';

let deviceWidth = Dimensions.get('window').width;

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/movies', () => {
      return {
        movies: [
          {
            id: 1,
            name: 'Bu benim fotografim',
            exp: 'Cemre',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 2,
            name: 'Bu benim video',
            exp: 'Ceren',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 3,
            name: 'Bu benim fotografim',
            exp: 'Meric',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/4040893/pexels-photo-4040893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 4,
            name: 'Bu benim video',
            exp: 'Ege',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 5,
            name: 'Bu benim fotografim',
            exp: 'Emre',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 6,
            name: 'Bu benim video',
            exp: 'Seyhan',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 7,
            name: 'Bu benim fotografim',
            exp: 'Selma',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 8,
            name: 'Bu benim video',
            exp: 'Kerem',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 9,
            name: 'Bu benim fotografim',
            exp: 'Cemre',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 10,
            name: 'Bu benim video',
            exp: 'Ceren',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 11,
            name: 'Bu benim fotografim',
            exp: 'Meric',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/1138369/pexels-photo-1138369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 12,
            name: 'Bu benim video',
            exp: 'Ege',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 13,
            name: 'Bu benim fotografim',
            exp: 'Emre',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/1138369/pexels-photo-1138369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
          {
            id: 14,
            name: 'Bu benim video',
            exp: 'Seyhan',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://player.vimeo.com/external/463980396.sd.mp4?s=e54ac16657456fd3361d5fd1cae26356fe6b89d1&profile_id=165&oauth2_token_id=57447761',
                type: 'video',
              },
            ],
          },
          {
            id: 15,
            name: 'Bu benim fotografim',
            exp: 'Selma',
            comment: 'View 1 Comment',
            year: 2010,
            posts: [
              {
                url:
                  'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                type: 'photo',
              },
              {
                url:
                  'https://scontent.fist13-1.fna.fbcdn.net/v/t1.0-9/137559827_111037457597023_1450321202335698862_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rcoxwtB0hkIAX-syhyU&_nc_ht=scontent.fist13-1.fna&oh=032b4af3ca407f547a6c67e08ae06968&oe=602F0BFA',
                type: 'photo',
              },
            ],
          },
        ],
      };
    });
  },
});

export default function App({navigation}) {
  let [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((json) => setMovies(json.movies));
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Search onPress={() => navigation.navigate('SearchScreen')} />

      {movies.map((movie) => (
        <View key={movie.id}>
          <UpperPost />
          <PostView posts={movie.posts} />

          <LowerPost
            exp={movie.exp}
            name={movie.name}
            comment={movie.comment}
          />
        </View>
      ))}
    </ScrollView>
  );
}
