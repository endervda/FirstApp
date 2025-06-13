import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogCard = ({ blog, onPress }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-BE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.tag}>{blog.tag}</Text>
          <Text style={styles.date}>{formatDate(blog.date)}</Text>
        </View>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {blog.thumbnailDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#f28c5b',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
  },
  date: {
    color: '#555',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default BlogCard;
