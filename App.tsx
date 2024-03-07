// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyJourneyScreen from './screens/MyJourneyScreen';
import JournalScreen from './screens/JournalScreen';
import ContactsScreen from './screens/ContactsScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import ViewJournalEntriesScreen from './screens/ViewJournalEntriesScreen';
import MoodLog from './screens/MoodLog';
import RelapseForm from './screens/RelapseForm';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My Journey" component={MyJourneyScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="ViewJournalEntries" component={ViewJournalEntriesScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="About Me" component={AboutMeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="MoodLog" component={MoodLog} />
        <Stack.Screen name="RelapseForm" component={RelapseForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}