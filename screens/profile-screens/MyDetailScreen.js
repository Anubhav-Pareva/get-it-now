import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../../components/HeaderTitle";
import BackButton from "../../components/BackButton";
import ClickableCustomView from "../../components/ClickableCustomView";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../assets/constant";
import UserCredentials from "../../components/profile-module/userCredentials";
import CommonModal from "../../components/commonModal";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const ModalContent = () => {
  return (
    <View style={styles2.container}>
      <Text style={styles2.title}>Full Name</Text>
      <View style={styles2.inputWrapper}>
        <TextInput
          mode="outlined"
          label={"First Name"}
          value="Anubhav"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          theme={{
            colors: {
              onSurfaceVariant: Colors["my-green-60"],
            },
          }}
        />
        <TextInput
          mode="outlined"
          label={"Last Name"}
          value="Pareva"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          theme={{
            colors: {
              onSurfaceVariant: Colors["my-green-60"],
            },
          }}
        />
        <TextInput
          mode="outlined"
          label={"Surname"}
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
        />
        <Button
          mode="contained"
          buttonColor={Colors["my-green-70"]}
          style={{
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 700,
            marginTop: 32,
          }}
        >
          Save
        </Button>
      </View>
    </View>
  );
};
export default function MyDetails() {
  const [showModal, setShowModal] = useState(false);
  const Navigation = useNavigation();
  const handleBackButton = () => {
    Navigation.goBack();
  };
  const hideModal = () => setShowModal(false);
  const displayModal = () => setShowModal(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton size={20} handleBackbutton={handleBackButton} />
        <HeaderTitle title={"My details"} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ClickableCustomView
          title="Anastasia"
          subTitle="First Name Last Name"
          onPress={displayModal}
        />
        <UserCredentials />
      </ScrollView>
      <CommonModal
        visible={showModal}
        hideModal={hideModal}
        content={<ModalContent />}
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
    gap: 48,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    padding: 16,
    gap: 8,
  },
  inputWrapper: {
    width: "100%",
    gap: 8,
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
});
