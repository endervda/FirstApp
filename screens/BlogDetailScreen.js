import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Functie om HTML tags te strippen en <p> te vervangen door nieuwe regels
function stripHtmlTagsWithParagraphs(html) {
  if (!html) return '';
  // Vervang <p ...> door twee nieuwe regels
  let text = html.replace(/<p[^>]*>/gi, '\n\n');
  // Verwijder sluitende </p> tags
  text = text.replace(/<\/p>/gi, '');
  // Verwijder overige HTML tags
  text = text.replace(/<[^>]+>/g, '');
  // Trim whitespace aan begin en eind
  return text.trim();
}

// Functie om datum te formatteren naar DD/MM/YYYY
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // maanden 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function BlogDetailScreen({ route }) {
  const { blog } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{blog.title || 'Geen titel'}</Text>

      {blog.image && (
        <Image source={{ uri: blog.image }} style={styles.image} />
      )}

      <View style={styles.metaRow}>
        <Text style={styles.tag}>{blog.tag || ''}</Text>
        <Text style={styles.date}>{formatDate(blog.date)}</Text>
      </View>

      <Text style={styles.description}>{blog.description || ''}</Text>

      <Text style={styles.body}>{stripHtmlTagsWithParagraphs(blog.content) || 'Geen inhoud beschikbaar.'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#213335',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#f28c5b',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    marginRight: 12,
  },
  date: {
    fontSize: 14,
    color: '#5D6F83',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});
