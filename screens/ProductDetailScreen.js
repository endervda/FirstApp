import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const sizeLabels = {
  'ab210777cbb6e7fc6dd324bde0db7350': 'Extra Large',
  'e090fb28823103bce49230dba3868005': 'Large',
  '1a18ea29caed143f0e4192e6d7708b9c': 'Medium',
  'e18faaaab55a74d1a0f55336735b4851': 'Small',
  '2d6e1fcf2d2f5090808bacae44e392f2': '41',
};

export default function ProductDetailScreen() {
  const route = useRoute();
  const { product } = route.params;
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const [quantity, setQuantity] = useState(1);

  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const priceInEuros = product.price.toFixed(2);
  const imageUrl = product.image;
  const type = product.type || 'Onbekend';
  const size = sizeLabels[product.size] || product.size || 'Onbekend';

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
        <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color="#f28c5b" />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>€ {priceInEuros} EUR</Text>

      <View style={styles.detailsRow}>
        <View style={styles.detailsColumn}>
          <Text style={styles.eyebrow}>Type</Text>
          <Text style={styles.details}>{type}</Text>
        </View>
        <View style={styles.detailsColumn}>
          <Text style={styles.eyebrow}>Size</Text>
          <Text style={styles.details}>{size}</Text>
        </View>
      </View>

      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          <Text style={styles.qtyButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => setQuantity((prev) => prev + 1)}
        >
          <Text style={styles.qtyButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#213335',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 20,
    color: '#f28c5b',
    marginBottom: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  detailsColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '600',
    color: '#213335',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
    backgroundColor: '#f28c5b',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    color: '#FFF',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  qtyButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 15,
    fontSize: 18,
  },
  cartButton: {
    backgroundColor: '#f28c5b',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
