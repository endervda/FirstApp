import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="Koop Nu" color="#8b4513" onPress={() => alert(`Je hebt ${name} gekozen!`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#5a3e2b',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8b4513',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProductCard;
