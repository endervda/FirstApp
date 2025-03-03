import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    image: 'https://placehold.co/150',
    name: 'Vintage Spijkerjack',
    description: 'Een retro spijkerjack uit de jaren 90, nog in topconditie!',
    price: '€25,00',
  },
  {
    id: 2,
    image: 'https://placehold.co/150',
    name: 'Leren Handtas',
    description: 'Mooie vintage handtas van echt leer.',
    price: '€40,00',
  },
  {
    id: 3,
    image: 'https://placehold.co/150',
    name: 'Bohemian Armband',
    description: 'Handgemaakte armband met natuurlijke stenen.',
    price: '€10,00',
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Thrift Shop 🛍️</Text>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3e2b',
  },
});

export default HomeScreen;
