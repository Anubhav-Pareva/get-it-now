import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import HeaderTitle from "../../components/HeaderTitle";
import { Colors } from "../../assets/constant";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-paper";
import ClickableCustomView from "../../components/ClickableCustomView";

const addressList = [
  {
    addressName: "Noida One",
    addressLine1: "123 Main St",
  },
  {
    addressName: "Home",
    addressLine1: "456 Main St",
  },
  {
    addressName: "Office",
    addressLine1: "789 Main St",
  },
  {
    addressName: "home 2",
    addressLine1: "0123 Main St",
  },
];
export default function MyAddress(){
    const Navigation = useNavigation();
      const handleBackButton = () => {
        Navigation.goBack();
      };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton size={20} handleBackbutton={handleBackButton} />
          <HeaderTitle title={"My addresses"} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>My addresses</Text>
          <View style={styles.addressWrapper}>
            {addressList.map((address, index) => (
                <ClickableCustomView 
                            key={index} 
                            title={address.addressName} 
                            subTitle={address.addressLine1}
                            isIcon={true}
                            icon={"cog"}/>
            ))}
          </View>
          <Button icon={"plus"} textColor={Colors["my-green-70"]} style={{fontSize:16, fontWeight:700, alignItems:"flex-start"}}>
            Add new address
          </Button>
        </ScrollView>
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
  title:{
    fontSize:16,
    fontWeight:700,
    color:Colors["my-black-2"]
  },
  addressWrapper:{
    gap:12,
    paddingVertical:12
  }
});