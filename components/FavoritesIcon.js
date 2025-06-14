import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesIcon({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Favorites')}
      style={{ marginLeft: 15 }}
    >
      <Ionicons name="heart-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );
}
