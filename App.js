import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartIcon from './components/CartIcon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={({ navigation }) => ({
                headerRight: () => (
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Favorites')}
                      style={styles.iconButton}
                    >
                      <Ionicons name="heart-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.iconButton}>
                      <CartIcon navigation={navigation} />
                    </View>
                  </View>
                ),
                headerStyle: {
                  backgroundColor: '#213335',
                  shadowColor: 'transparent',
                },
                headerTintColor: '#FFF',
                headerTitle: () => (
                  <Image
                    source={require('./assets/logo.png')}
                    style={{ width: 180, height: 39, resizeMode: 'contain' }}
                  />
                ),
                headerTitleAlign: 'center',
              })}
            >
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: null }} />
              <Stack.Screen name="Products" component={ProductsScreen} options={screenBack("Products")} />
              <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={screenBack("Product Detail")} />
              <Stack.Screen name="Cart" component={CartScreen} options={screenBack("Cart")} />
              <Stack.Screen name="Favorites" component={FavoritesScreen} options={screenBack("Favorites")} />
              <Stack.Screen name="Blog" component={BlogScreen} options={screenBack("Blog")} />
              <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={screenBack("Blog Detail")} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
  );
}

const screenBack = (title) => ({ navigation }) => ({
  title,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  iconButton: {
    marginLeft: 12,
  },
});
