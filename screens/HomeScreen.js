import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Checkout the latest lucky finds</Text>
      <Text style={styles.header}>What’s new?</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.cardTitle}>🛍️ Bekijk alle producten</Text>
        <Text style={styles.cardText}>Duik in onze vintage schatkist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Blog')}>
        <Text style={styles.cardTitle}>📰 Bekijk onze blog</Text>
        <Text style={styles.cardText}>Lees inspirerende verhalen en tips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  eyebrow: {
    fontSize: 14,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#213335',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#213335',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
