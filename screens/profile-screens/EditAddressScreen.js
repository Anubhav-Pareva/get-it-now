import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import HeaderTitle from "../../components/HeaderTitle";
import { Colors } from "../../assets/constant";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Icon, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import CommonModal from "../../components/commonModal";
import SelectCityModalContent from "./modalContent/SelectCityModalContent";


export default function EditAddress() {
  const [address, setAddress] = useState("");
  const [addressName, setAddressName] = useState("");
  const [city, setCity] = useState("Select city");
  const [showCityModal, setCityModal] = useState(false);
  const Navigation = useNavigation();
  const route = useRoute();
  const { index, data, type } = route.params;
  useEffect(() => {
    if (data) {
      setAddress(data?.addressLine1);
      setAddressName(data?.addressName);
      setCity(data?.city);
    }
  }, []);
  const handleBackButton = () => {
    Navigation.goBack();
  };
  const hideCityModal = () => setCityModal(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton size={20} handleBackbutton={handleBackButton} />
        <HeaderTitle title={type === "edit" ? "Edit address" : "Add address"} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cityWrapper}>
          <Text style={styles.cityTitle}>Your city</Text>
          <TouchableHighlight
            onPress={() => setCityModal(true)}
            underlayColor={Colors["my-green-30"]}
          >
            <View style={styles.cityDataWrapper}>
              <Text style={styles.cityTitle}>{city}</Text>
              <Icon
                source={"arrow-right"}
                size={24}
                color={Colors["my-green-70"]}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.buttonWrapper}>
            <TextInput
              mode="outlined"
              label={"Address"}
              value={address}
              onChangeText={(text) => setAddress(text)}
              activeOutlineColor={Colors["my-green-70"]}
              outlineColor={Colors["my-green-70"]}
            />
            <TextInput
              mode="outlined"
              label={"Address Name"}
              value={addressName}
              onChangeText={(text) => setAddressName(text)}
              activeOutlineColor={Colors["my-green-70"]}
              outlineColor={Colors["my-green-70"]}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              mode="contained"
              buttonColor={Colors["my-green-70"]}
              onPress={handleBackButton}
            >
              Save
            </Button>
            {type === "edit" && <Button
              mode="outlined"
              textColor={Colors["my-red"]}
              style={{ borderColor: Colors["my-red"] }}
              onPress={handleBackButton}
            >
              Delete
            </Button>}
            <Button
              mode="outlined"
              textColor={Colors["my-green-70"]}
              style={{ borderColor: Colors["my-green-70"] }}
              onPress={handleBackButton}
            >
              Cancel
            </Button>
          </View>
        </View>
      </ScrollView>
      <CommonModal
        visible={showCityModal}
        hideModal={hideCityModal}
        content={
          <SelectCityModalContent
            setCity={setCity}
            hideCityModal={hideCityModal}
          />
        }
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: Colors["my-white"],
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
  scrollContainer: {
    gap: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cityWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cityTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors["my-black-2"],
  },
  cityDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  formWrapper: {
    gap: 8,
  },
  inputWrapper: {},
  buttonWrapper: {
    gap: 16,
    paddingVertical: 8,
  },
});
