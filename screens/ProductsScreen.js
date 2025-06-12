import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyProducts = [
  {
    _id: '1',
    name: 'Vintage Jacket',
    description: 'A stylish retro jacket from the 80s.',
    price: 35,
    image: 'https://via.placeholder.com/300x200.png?text=Jacket',
  },
  {
    _id: '2',
    name: 'Leather Boots',
    description: 'Genuine leather boots in excellent condition.',
    price: 50,
    image: 'https://via.placeholder.com/300x200.png?text=Boots',
  },
  {
    _id: '3',
    name: 'Denim Jeans',
    description: 'Classic blue jeans, barely worn.',
    price: 25,
    image: 'https://via.placeholder.com/300x200.png?text=Jeans',
  },
];

// Helper functie om prijs te formatteren als "€ 99,99 EUR"
function formatPrice(price) {
  const number = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
  if (isNaN(number)) return price;
  return `€ ${number.toFixed(2).replace('.', ',')} EUR`;
}

const ProductsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyProducts}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#f28c5b'
  },
  price: {
    fontSize: 16,
    color: '#213335',
    marginBottom: 6,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductsScreen;
