// screens/MessagesScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
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
    <Container>
      <Content>
        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 16 }}>
          Messages List
        </Text>
        <List>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem>
                <Text>From: {item.sender.username}</Text>
                <Text>To: {item.receiver.username}</Text>
                <Text>Content: {item.content}</Text>
              </ListItem>
            )}
          />
        </List>
      </Content>
    </Container>
  );
};

export default MessagesScreen;
