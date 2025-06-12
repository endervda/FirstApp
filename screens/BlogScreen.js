// screens/BlogScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyPosts = [
  { _id: 'a', name: 'Thrifting Tips for Beginners', body: 'Start small. Focus on quality over quantity.' },
  { _id: 'b', name: 'Top 5 Vintage Trends in 2025', body: 'From oversized blazers to retro sneakers...' },
  { _id: 'c', name: 'Why Thrifting is Eco-Friendly', body: 'Reusing clothes reduces waste and pollution.' },
];

const BlogScreen = ({ navigation }) => {
  return (
    <FlatList
      data={dummyPosts}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BlogDetail', { post: item })}
        >
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BlogScreen;
