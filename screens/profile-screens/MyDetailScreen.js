import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../../components/HeaderTitle";
import BackButton from "../../components/BackButton";
import ClickableCustomView from "../../components/ClickableCustomView";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../assets/constant";
import UserCredentials from "../../components/profile-module/userCredentials";
import CommonModal from "../../components/commonModal";
import { useState } from "react";
import EditDetailModalContent from "./modalContent/EditDetailModalContent";


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
        content={<EditDetailModalContent />}
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

