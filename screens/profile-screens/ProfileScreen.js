import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../assets/constant";
import { SafeAreaView } from "react-native-safe-area-context";
import ClickableCustomView from "../../components/ClickableCustomView";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../../components/HeaderTitle";
import * as Clipboard from "expo-clipboard";
import CommonSnackbar from "../../components/commonSnackbar";
import { useState } from "react";
export default function ProfileScreen() {
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [visibleComingSnackbar, setComingSnackbar] = useState(false);
  const navigation = useNavigation();
  const goTOMyDetail = () => {
    navigation.navigate("MyDetails");
  };
  const goToSubscription = () => {
    navigation.navigate("MySubscription");
  };
  const goToMyAddress = () => {
    navigation.navigate("MyAddress");
  };
  const goToPointandBonus = () => {
    navigation.navigate("PointandBonus");
  }
  const goToMyOrders = () => {
    navigation.navigate("MyOrders");
  };
  const copyToClipboard = (text) => {
    Clipboard.setStringAsync(text);
    setVisibleSnackbar(true);
  }
  const dismissSnackbar = () => {
    setVisibleSnackbar(false);
  }
  const dismissComingSnackbar = () => {
    setComingSnackbar(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title={"Profile"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ClickableCustomView
          title="Anastasia"
          subTitle="Account Management"
          onPress={goTOMyDetail}
        />
        <ClickableCustomView
          title="And get 10% discount"
          subTitle="Subscribe"
          onPress={goToSubscription}
        />
        <View style={styles.subContainer}>
          <View style={{ flex: 1 }}>
            <ClickableCustomView
              title="61 points"
              subTitle="Points and bonuses"
              onPress={goToPointandBonus}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ClickableCustomView
              title="ААА117"
              subTitle="Code for a friend"
              onPress={() => copyToClipboard("ААА117")}
              isIcon={true}
              icon={"content-copy"}
            />
          </View>
        </View>
        <ClickableCustomView title="Orders"  onPress={goToMyOrders}/>
        <ClickableCustomView title="Addresses" onPress={goToMyAddress} />
        {/* <ClickableCustomView title="Payment Information" /> */}
        <ClickableCustomView title="Become a partner" onPress={()=>setComingSnackbar(true)}/>
      </ScrollView>
      <CommonSnackbar
        visible={visibleSnackbar}
        message={"Code copy successfully"}
        duration={1000}
        onDismissSnackBar={dismissSnackbar}
      />
      <CommonSnackbar
        visible={visibleComingSnackbar}
        message={"Comming Soon!!"}
        duration={1000}
        onDismissSnackBar={dismissComingSnackbar}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors["my-white"],
    padding: 8,
    paddingBottom: 0,
    gap: 16,
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  scrollContainer: {
    backgroundColor: Colors["my-white"],
    gap: 8,
    paddingVertical: 8,
  },
});
