// screens/ProductsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyProducts = [
  { _id: '1', name: 'Vintage Jacket', description: 'A stylish retro jacket from the 80s.' },
  { _id: '2', name: 'Leather Boots', description: 'Genuine leather boots in excellent condition.' },
  { _id: '3', name: 'Denim Jeans', description: 'Classic blue jeans, barely worn.' },
];

const ProductsScreen = ({ navigation }) => {
  return (
    <FlatList
      data={dummyProducts}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductsScreen;
