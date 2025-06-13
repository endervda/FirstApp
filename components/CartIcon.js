import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';

export default function CartIcon({ navigation }) {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  const handlePress = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
      <Ionicons name="cart-outline" size={24} color="#FFF" />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
  },
  badge: {
    position: 'absolute',
    right: 6,
    top: 6,
    backgroundColor: '#f28c5b',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
