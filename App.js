// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Text } from 'native-base';
import UsersScreen from './screens/UsersScreen';
import MessagesScreen from './screens/MessagesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default App;
