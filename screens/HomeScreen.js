import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, image: 'https://placehold.co/150', name: 'Vintage Spijkerjack', description: 'Retro spijkerjack uit de jaren 90.', price: '€25,00' },
  { id: 2, image: 'https://placehold.co/150', name: 'Leren Handtas', description: 'Mooie vintage handtas van echt leer.', price: '€40,00' },
  { id: 3, image: 'https://placehold.co/150', name: 'Bohemian Armband', description: 'Handgemaakte armband met stenen.', price: '€10,00' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Thrift Shop 🛍️</Text>
      {products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => navigation.navigate('Details', { product })}>
          <ProductCard image={product.image} name={product.name} description={product.description} price={product.price} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5dc' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#5a3e2b' },
});

export default HomeScreen;
