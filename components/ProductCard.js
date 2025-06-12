import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const formatPrice = (rawPrice) => {
  // Remove potential currency symbols, dots, etc.
  const number = parseFloat(
    String(rawPrice).replace(/[^\d,.-]/g, '').replace(',', '.')
  );
  if (isNaN(number)) return rawPrice;
  return `€ ${number.toFixed(2).replace('.', ',')} EUR`;
};

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <TouchableOpacity onPress={() => navigation.navigate('Details', { product })}>
        <Text style={styles.title}>{product.name}</Text>
      </TouchableOpacity>

      <Text style={styles.price}>{formatPrice(product.price)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#f28c5b',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#213335',
  },
});

export default ProductCard;
