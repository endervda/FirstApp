import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#213335' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image 
                source={require('./assets/logo.png')} 
                style={{ width: 180, height: 39 }} 
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        })}
      />
      <HomeStack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
      <HomeStack.Screen name="Blog" component={BlogScreen} options={{ title: 'Blog' }} />
      <HomeStack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: 'Blog Detail' }} />
    </HomeStack.Navigator>
  );
}

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
          tabBarActiveTintColor: '#f28c5b',
          tabBarInactiveTintColor: '#FFF',
          tabBarStyle: { backgroundColor: '#213335' },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorieten' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
