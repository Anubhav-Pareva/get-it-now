import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Divider, Searchbar } from "react-native-paper";
import { Colors } from "../../../assets/constant";

export default function SelectCityModalContent({ setCity, hideCityModal }) {
  const cityList = [
    { town: "Najafgarh", city: "Delhi" },
    { town: "Narela", city: "Delhi" },
    { town: "New Delhi", city: "Delhi" },
    { town: "Sultanpur Majra", city: "Delhi" },
    { town: "Kirari Suleman Nagar", city: "Delhi" },
    { town: "Bhalswa Jahangir Pur", city: "Delhi" },
    { town: "Nangloi", city: "Delhi" },
    { town: "Karawal Nagar", city: "Delhi" },
    { town: "Dallo Pura", city: "Delhi" },
    { town: "Delhi Cantonment", city: "Delhi" },
    { town: "Deoli", city: "Delhi" },
    { town: "Gokal Pur", city: "Delhi" },
    { town: "Mustafabad", city: "Delhi" },
    { town: "Hastsal", city: "Delhi" },
    { town: "Burari", city: "Delhi" },
    { town: "Gharoli", city: "Delhi" },
    { town: "Chilla Saroda Bangar", city: "Delhi" },
    { town: "Taj Pul", city: "Delhi" },
    { town: "Jaffrabad", city: "Delhi" },
    { town: "Puth Kalan", city: "Delhi" },
    { town: "Mandoli", city: "Delhi" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const selectCity = (selectedCity) => {
    setCity(selectedCity);
    hideCityModal();
  };
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {cityList
          .filter((city) =>
            city.town.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((city, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => selectCity(city.town)}
              underlayColor={Colors["my-gray-20"]}
            >
              <View style={styles.cityView}>
                <View style={styles.cityWrapper}>
                  <Text style={styles.townStyle}>{city.town}</Text>
                  <Text style={styles.cityStyle}>{city.city}</Text>
                </View>
                <Divider />
              </View>
            </TouchableHighlight>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 16,
    paddingBottom: 64,
  },
  cityView: {
    padding: 16,
    gap: 8,
  },
  cityWrapper: {
    gap: 4,
  },
  townStyle: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-green-dark"],
  },
  cityStyle: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors["my-gray-40"],
  },
});
