import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const PropertyList = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await fetch("http://localhost:8080/apartments");
        const data = await response.json();
        setApartments(data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchApartments();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { id: item.id })}
    >
      <Image source={{ uri: item?.image }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.price}>
          ${new Intl.NumberFormat().format(item?.price)}
        </Text>
        <Text style={styles.location}>{item?.location}</Text>
        <Text style={styles.size}>{item?.size} sq. m.</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.bedrooms}>{item?.bedrooms} bedrooms</Text>
        <Text style={styles.bathrooms}>{item?.bathrooms} bathrooms</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = apartments.filter((item) => {
    return item?.location.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search properties..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.propertyListContainer}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchInputContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  propertyListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  size: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
  cardFooter: {
    padding: 10,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dcdcdc",
    justifyContent: "space-between",
  },
  bedrooms: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  bathrooms: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  parking: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
});

export default PropertyList;
