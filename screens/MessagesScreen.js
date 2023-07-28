// screens/MessagesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Box, Heading, VStack } from 'native-base';
import ChatApi from '../components/ChatApi';

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the backend
    ChatApi.get('messages/')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box flex={1} p={4}>
      <Heading size="lg" mb={4} fontWeight="bold">
        Messages List
      </Heading>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VStack mb={4}>
            <Text fontSize="lg">From: {item.sender.username}</Text>
            <Text fontSize="lg">To: {item.receiver.username}</Text>
            <Text fontSize="lg">Content: {item.content}</Text>
          </VStack>
        )}
      />
    </Box>
  );
};

export default MessagesScreen;
