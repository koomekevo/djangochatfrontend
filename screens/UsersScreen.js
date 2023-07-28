// screens/UsersScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
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
    <Container>
      <Content>
        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 16 }}>
          Users List
        </Text>
        <List>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem>
                <Text>{item.username}</Text>
              </ListItem>
            )}
          />
        </List>
      </Content>
    </Container>
  );
};

export default UsersScreen;
