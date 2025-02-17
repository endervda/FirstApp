import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  // Lijst met tweedehands producten
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Thrift Shop 🛍️</Text>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc', // Beige achtergrond voor vintage look
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3e2b', // Bruine vintage kleur
  },
});

