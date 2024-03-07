import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: new Date().getTime(),
      text: inputText,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v4/completions',
        {
          model: 'text-davinci-003', // Consider using the latest model
          prompt: inputText,
          max_tokens: 50,
        },
        {
          headers: {
            'Authorization': `Bearer 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`, 
          },
        },
      );

      const botResponse = response.data.choices[0].text.trim();
      const botMessage = {
        id: new Date().getTime() + 1,
        text: botResponse,
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInputText(''); 
  };

  return (
    <View className="flex-1 p-5">
      <ScrollView className="flex-1 mb-4">
        {messages.map((message) => (
          <View key={message.id} className={`mb-2 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <Text className="text-base px-4 py-2 rounded-lg bg-blue-200">{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View className="flex-row">
        <TextInput
          className="flex-1 border border-gray-300 p-2 rounded-lg mr-2"
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          underlineColorAndroid="transparent"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
