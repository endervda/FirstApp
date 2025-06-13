import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BlogDetailScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.title || post.name}</Text>
      <Text style={styles.body}>{post.content || post.body || 'Geen inhoud beschikbaar.'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 12,
    fontSize: 16,
    color: '#444',
  },
});

export default BlogDetailScreen;
