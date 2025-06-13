import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BlogCard from '../components/BlogCard';

const dummyBlogs = [
  {
    _id: 'b1',
    title: 'How to Style Vintage Jackets',
    description: 'Discover the best tips to rock your vintage jackets in 2025...',
    date: '2025-06-10',
    tag: 'Fashion',
    image: 'https://via.placeholder.com/300x180.png?text=Vintage+Style',
    content: 'Full blog content about styling vintage jackets...',
  },
  // Voeg hier meer blogs toe indien nodig
];

const BlogsScreen = ({ navigation }) => {
  return (
    <FlatList
      data={dummyBlogs}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <BlogCard
          blog={item}
          onPress={() => navigation.navigate('BlogDetail', { post: item })}
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default BlogsScreen;
