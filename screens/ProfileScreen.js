import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "../assets/constant";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import ClickableCustomView from "../components/ClickableCustomView";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderTitle title="Profile" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ClickableCustomView title="Anastasia" subTitle="Account Management" />
        <ClickableCustomView
          title="And get 10% discount"
          subTitle="Subscribe"
        />
        <View style={styles.subContainer}>
          <View style={{ flex: 1 }}>
            <ClickableCustomView
              title="61 points"
              subTitle="Points and bonuses"
            />
          </View>
          <View style={{ flex: 1 }}>
            <ClickableCustomView
              title="ААА117"
              subTitle="Code for a friend"
              isCopied={true}
            />
          </View>
        </View>
        <ClickableCustomView title="Orders" />
        <ClickableCustomView title="Addresses" />
        <ClickableCustomView title="Payment Information" />
        <ClickableCustomView title="Become a partner" />
      </ScrollView>
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
    backgroundColor:Colors["my-white"],
    gap:8,
    paddingVertical:8
  },
});
