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

      // Log de eerste 3 items overzichtelijk
      console.log('Eerste 3 blog items (verkort):');
      json.items.slice(0, 3).forEach((item, index) => {
        console.log(`Item ${index + 1}:`, {
          id: item.id,
          fieldData: item.fieldData ? {
            name: item.fieldData.name,
            date: item.fieldData.date,
            tag: item.fieldData.tag,
            description: item.fieldData.description,
            'body-text-rich': item.fieldData['body-text-rich'],
            'thumbnail-description': item.fieldData['thumbnail-description'],
            thumbnailImage: item.fieldData['thumbnail-image']?.url || 'geen image',
          } : 'geen fieldData',
        });
      });

      const formattedBlogs = json.items.map(item => {
        const fields = item.fieldData || {};
        return {
          id: item._id || item.id,
          title: fields.name || 'Geen titel',
          date: fields.date || 'Onbekend',
          tag: fields.tag || '',
          description: fields.description || 'Geen beschrijving',
          content: fields['body-text-rich'] || '',
          thumbnailDescription: fields['thumbnail-description'] || '',
          image: fields['thumbnail-image']?.url || 'https://via.placeholder.com/300x180.png?text=Geen+Afbeelding',
        };
      });

      setBlogs(formattedBlogs);
    } catch (err) {
      setError(err.message || 'Onbekende fout');
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
    <FlatList
      data={blogs}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <BlogCard
          blog={item}
          onPress={() => navigation.navigate('BlogDetail', { blog: item })}  // **hier aangepast**
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
