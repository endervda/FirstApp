import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';
import { CartProvider } from './contexts/CartContext';
import CartIcon from './components/CartIcon';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
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
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerLeft: null }}
            />
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  >
                    <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
                  </TouchableOpacity>
                ),
                title: 'Products',
              })}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  >
                    <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
                  </TouchableOpacity>
                ),
                title: 'Product Detail',
              })}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  >
                    <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
                  </TouchableOpacity>
                ),
                title: 'Cart',
              })}
            />
            <Stack.Screen
              name="Blog"
              component={BlogScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  >
                    <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
                  </TouchableOpacity>
                ),
                title: 'Blog',
              })}
            />
            <Stack.Screen
              name="BlogDetail"
              component={BlogDetailScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  >
                    <Text style={{ color: '#fff', fontSize: 24 }}>{'\u25C0'}</Text>
                  </TouchableOpacity>
                ),
                title: 'Blog Detail',
              })}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
