import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product?.price ?? 0);
    return total + price * item.quantity;
  }, 0);

  const renderItem = ({ item }) => {
    const price = parseFloat(item.product?.price ?? 0);
    const totalItemPrice = price * item.quantity;

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.product.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.product.name}</Text>
          <Text style={styles.details}>Quantity: {item.quantity}</Text>
          <Text style={styles.price}>€ {totalItemPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.product.id)} style={styles.deleteButton}>
          <Ionicons name="close-circle" size={24} color="#ff4d4d" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleOrderNow = () => {
    if (cartItems.length === 0) return;

    setIsOrdering(true);

    setTimeout(() => {
      setIsOrdering(false);
      clearCart();
      Alert.alert('Order Success', 'Your order went through successfully!');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.product.id}-${index}`}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <Text style={styles.total}>Total: € {totalPrice.toFixed(2)}</Text>

          <TouchableOpacity
            style={[styles.orderButton, isOrdering && styles.orderButtonDisabled]}
            onPress={handleOrderNow}
            disabled={isOrdering}
          >
            <Text style={styles.orderButtonText}>
              {isOrdering ? 'Ordering...' : 'Order Now'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  empty: {
    fontSize: 16,
    color: '#999',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#f28c5b',
    fontWeight: '500',
    marginTop: 4,
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'right',
  },
  deleteButton: {
    marginLeft: 10,
  },
  orderButton: {
    backgroundColor: '#f28c5b',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  orderButtonDisabled: {
    opacity: 0.6,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
