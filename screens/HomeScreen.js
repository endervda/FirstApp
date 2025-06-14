import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Discover timeless pieces with a story</Text>
        <Image
          source={require('../assets/heroimg.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={styles.heroSubtitle}>
          From cozy sweaters to timeless decor, every item tells a story and adds a touch of charm to your day.
        </Text>

        <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.ctaText}>Shop Now</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>
      <View style={styles.secondaryButtonContainer}>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Blog')}>
          <Text style={styles.secondaryText}>Read Blog</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.blogPrompt}>
          Learn more about thrifting by reading our blogs.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heroContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#213335',
    marginBottom: 12,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#5D6F83',
    marginBottom: 12,
    lineHeight: 22,
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginBottom: 4,
  },
  ctaButton: {
    backgroundColor: '#EB6534',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 12,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orText: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#7a8c98',
  },
  blogPrompt: {
    fontSize: 14,
    color: '#5D6F83',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 10,
    paddingHorizontal: 12,
    lineHeight: 20,
  },
  secondaryButtonContainer: {
    alignItems: 'center',
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: '#213335',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
  secondaryText: {
    color: '#213335',
    fontSize: 16,
    fontWeight: '500',
  },
});
