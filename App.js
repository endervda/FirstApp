import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// Stack navigator voor Home en Details
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#5a3e2b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Thrift Shop' }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ title: 'Product Details' }} />
    </HomeStack.Navigator>
  );
}

// Tab navigator onderaan het scherm
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Favorites') {
              iconName = 'heart';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5a3e2b',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f5f5dc' },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorieten' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
