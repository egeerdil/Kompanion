import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Feed from './screens/Feed';
import SearchScreen from './screens/SearchScreen';

<Login />;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'Feed',
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: 'Grid Seach',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
