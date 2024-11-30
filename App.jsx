import React from 'react';
import 'react-native-gesture-handler'; // Ensure this is imported at the very top
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated to use Native Stack Navigator
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'My To-Do List' }} // Title for the Home screen
                />
                <Stack.Screen 
                    name="About" 
                    component={AboutScreen} 
                    options={{ title: 'About This App' }} // Title for the About screen
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
