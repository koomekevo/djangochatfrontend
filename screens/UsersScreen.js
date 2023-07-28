// screens/UsersScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Box, Heading, VStack } from 'native-base';
import ChatApi from '../components/ChatApi';

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    ChatApi.get('users/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box flex={1} p={4}>
      <Heading size="lg" mb={4} fontWeight="bold">
        Users List
      </Heading>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text fontSize="lg" mb={2}>
            {item.username}
          </Text>
        )}
      />
    </Box>
  );
};

export default UsersScreen;
