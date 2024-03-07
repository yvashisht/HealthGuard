import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@env';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your API key is correctly set up in your environment variables
});

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInput = async () => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      });

      // Since 'data' property does not exist, access 'choices' directly from 'completion'
      const aiMessageContent = completion.choices[0].message.content;

      const newMessage = {
        id: Date.now(),
        text: aiMessageContent,
        sender: 'ai'
      };

      // Update messages state with user and AI messages
      setMessages(prevMessages => [...prevMessages, { id: Date.now() - 1, text: input, sender: 'user' }, newMessage]);
      setInput(''); // Clear input after message is sent
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <View className="flex-1 p-4">
      <ScrollView className="flex-1 mb-4">
        {messages.map((message) => (
          <View key={message.id} className={`mb-2 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <Text className={`text-base px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View className="flex-row">
        <TextInput
          className="flex-1 border border-blue-600 p-2 rounded-lg mr-2"
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          underlineColorAndroid="transparent"
        />
        <Button title="Send" onPress={handleInput} />
      </View>
    </View>
  );
};

export default ChatScreen;
