import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const priceFormatted = (product.price * quantity).toFixed(2).replace('.', ',');

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.price}>
        Totaal: € {priceFormatted} {product.currency}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 280,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#f28c5b',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#213335',
  },
});
