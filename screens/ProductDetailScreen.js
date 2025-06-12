// screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description || 'No description available.'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 12,
    fontSize: 16,
    color: '#444',
  },
});

export default ProductDetailScreen;
