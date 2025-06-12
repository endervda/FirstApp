import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
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
      <View style={styles.headerContainer}>
        <Text style={styles.eyebrow}>Your next favourite piece is here</Text>
        <Text style={styles.header}>All our lucky finds</Text>
      </View>
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
    backgroundColor: '#FFF',
  },
  headerContainer: {
    marginBottom: 20,
  },
  eyebrow: {
    fontSize: 14,
    color: '#213335',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: '350',
    color: '#213335',
  },
});

export default HomeScreen;
