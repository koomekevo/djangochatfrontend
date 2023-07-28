// screens/MessagesScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ChatApi from "../components/ChatApi";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the backend
    ChatApi.get("messages/")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>Messages List</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>From: {item.sender.username}</Text>
            <Text>To: {item.receiver.username}</Text>
            <Text>Content: {item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MessagesScreen;
