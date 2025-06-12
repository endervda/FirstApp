import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Discover timeless pieces with a story</Text>
        <Text style={styles.heroSubtitle}>
          From cozy sweaters to timeless decor, every item tells a story and adds a touch of charm to your day. Your next lucky find is just a click away.
        </Text>
        <Image
          source={require('../assets/heroimg.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Browse Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Blog')}>
          <Text style={styles.buttonText}>Read Blog</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heroContainer: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#213335',
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#5D6F83',
    marginBottom: 15,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  buttonContainer: {
    gap: 20,
  },
  navButton: {
    backgroundColor: '#f28c5b',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
