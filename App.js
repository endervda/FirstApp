import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom!</Text>
      <Text style={styles.description}>
        Dit is de landingspagina van mijn applicatie!
      </Text>
      
      <Image 
        source={{ uri: "https://placehold.co/400" }}
        style={styles.image}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff4081",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingPage;