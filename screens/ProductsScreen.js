import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/ProductCard';

const API_URL = 'https://api.webflow.com/v2/sites/68418e388b488bc93c8a5d75/products';
const API_TOKEN = 'Bearer 083f9b97d0e4049a358d22c560dedff7023bf1df10c9a2c6d79e7b4f0d033577';

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_TOKEN,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const json = await response.json();

      const formattedProducts = json.items.map((item) => {
        const product = item.product?.fieldData || {};
        const sku = item.skus?.[0]?.fieldData || {};
        return {
          id: item.product?.id || Math.random().toString(),
          name: product.name || 'Geen naam',
          description: product.description || 'Geen omschrijving',
          price: sku.price?.value ? sku.price.value / 100 : 0,
          currency: sku.price?.unit || 'EUR',
          image:
            sku['main-image']?.url ||
            'https://via.placeholder.com/300x180.png?text=Geen+Afbeelding',
          rawProduct: item,
        };
      });

      setProducts(formattedProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#f28c5b" />
        <Text style={{ marginTop: 10, color: '#888' }}>Laden...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={{ color: 'red', fontSize: 16, marginBottom: 4 }}>
          ⚠️ Fout bij laden
        </Text>
        <Text style={{ color: '#333', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>all our lucky finds</Text>
      <Text style={styles.title}>Your next favourite piece is here</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.name}
            description={item.description}
            price={item.price}
            currency={item.currency}
            image={item.image}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  eyebrow: {
    fontSize: 14,
    color: '#f28c5b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#213335',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
