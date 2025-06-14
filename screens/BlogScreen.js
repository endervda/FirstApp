import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import BlogCard from '../components/BlogCard';

const API_URL = 'https://api.webflow.com/v2/sites/68418e388b488bc93c8a5d75/collections/6846f06f9713f6574f577fce/items';
const API_TOKEN = 'Bearer 083f9b97d0e4049a358d22c560dedff7023bf1df10c9a2c6d79e7b4f0d033577';

export default function BlogScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

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

      const formattedBlogs = json.items.map(item => {
        const fields = item.fieldData || {};
        return {
          id: item._id || item.id,
          title: fields.name || 'No Title',
          date: fields.date || '',
          tag: fields.tag || '',
          description: fields.description || 'No description',
          content: fields['body-text-rich'] || '',
          thumbnailDescription: fields['thumbnail-description'] || '',
          image: fields['thumbnail-image']?.url || 'https://via.placeholder.com/300x180.png?text=Geen+Afbeelding',
        };
      });

      setBlogs(formattedBlogs);
    } catch (err) {
      setError(err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#f28c5b" />
        <Text style={{ marginTop: 10, color: '#888' }}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={{ color: 'red', fontSize: 16, marginBottom: 4 }}>
          ⚠️ Error while loading
        </Text>
        <Text style={{ color: '#333', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={blogs}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.eyebrow}>all our amazing blogs</Text>
          <Text style={styles.title}>Start reading to learn more about thrifting</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <BlogCard
          blog={item}
          onPress={() => navigation.navigate('BlogDetail', { blog: item })}
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 12,
    color: '#213335',
  },
});
