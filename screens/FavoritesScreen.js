import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useFavorites();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.description}</Text>
        <Text style={styles.price}>€ {parseFloat(item.price).toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.deleteButton}>
        <Ionicons name="heart" size={24} color="#f28c5b" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  empty: {
    fontSize: 16,
    color: '#999',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#f28c5b',
    fontWeight: '500',
    marginTop: 4,
  },
  deleteButton: {
    marginLeft: 10,
  },
});
