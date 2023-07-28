// screens/UsersScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ChatApi from "../components/ChatApi";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    ChatApi.get("users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>Users List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.username}</Text>}
      />
    </View>
  );
};

export default UsersScreen;
