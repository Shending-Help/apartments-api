import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";

const ApartmentDetailView = ({ route }) => {
  const { id } = route.params;
  const [apartment, setApartment] = useState({});

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/apartments/${id}`);
        const data = await response.json();
        setApartment(data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchApartmentDetails();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: apartment.image || "https://picsum.photos/700" }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{apartment.title}</Text>
        <Text style={styles.price}>
          ${new Intl.NumberFormat().format(apartment?.price)}
        </Text>
        <Text style={styles.description}>{apartment.description}</Text>
        <Text style={styles.details}>
          Bedrooms: {apartment.bedrooms} | Bathrooms: {apartment.bathrooms}
        </Text>
        <Text style={styles.details}>
          Available: {apartment.available ? "Yes" : "No"}
        </Text>
        <Text style={styles.details}>
          Created: {new Date(apartment.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#999",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
};

export default ApartmentDetailView;
