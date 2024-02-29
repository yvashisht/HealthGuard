// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logoNoBg from '../assets/Logo-no-bg.png'; 
import { Button } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (

    <View className='flex-auto justify-center items-center bg-blue-100'>
      <View className='flex-row items-center'>
        <Image
          source={logoNoBg}
          className = "bg-white-200 w-10 h-10"
        />
        <Text className='text-2xl font-bold'>Welcome to HealthGuard!</Text>
      </View>
      <Button
        title="User"
        onPress={() => navigation.navigate('User')}
      />
      <Button
        title="My Journey"
        onPress={() => navigation.navigate('My Journey')}
      />
      <Button
        title="Journal"
        onPress={() => navigation.navigate('Journal')}
      />
      <Button
        title="Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
        <Button
        title="Appointments"
        onPress={() => navigation.navigate('Appointments')}
      />
      <Button
        title="About Me"
        onPress={() => navigation.navigate('About Me')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
