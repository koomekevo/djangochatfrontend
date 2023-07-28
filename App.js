// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import UsersScreen from './screens/UsersScreen';
import MessagesScreen from './screens/MessagesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
