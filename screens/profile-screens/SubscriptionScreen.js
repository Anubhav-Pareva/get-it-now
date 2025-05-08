import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import HeaderTitle from "../../components/HeaderTitle";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../assets/constant";
import { LinearGradient } from "expo-linear-gradient";
import MyRadioButton from "../../components/myRadioButton";
import { Button } from "react-native-paper";
import { useState } from "react";
import CommonDialog from "../../components/commonDialog";
const RadioOptions = [
  {
    value: "$0.99",
    title: "1 Month",
    subTitle: null,
    price: "$0.99",
    offPrice: null,
  },
  {
    value: "$2.00",
    title: "3 months",
    subTitle: "10% cheaper",
    price: "$2.00",
    offPrice: "$2.60",
  },
  {
    value: "$6.99",
    title: "6 months",
    subTitle: "15% cheaper",
    price: "$6.99",
    offPrice: "$7.60",
  },
  {
    value: "$9.99",
    title: "Yearly Subscription",
    subTitle: "20% cheaper",
    price: "$9.99",
    offPrice: "$13.00",
  },
];

export default function Subscription(){
    const [checked, setChecked] = useState(null);
    const [showWarnDialog, setWarnDialog] = useState(false);
    const [showPayDialog, setPayDialog] = useState(false);
    const Navigation = useNavigation();
    const handleBackButton = () => {
        Navigation.goBack();
    }
    const hideWarnDialog = () => setWarnDialog(false);
    const hidePayDialog = () => setPayDialog(false);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton size={20} handleBackbutton={handleBackButton} />
          <HeaderTitle title={"Subscription"} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <LinearGradient
            colors={[Colors["my-yellow"], Colors["my-green-70"]]}
            style={styles.imageWrapper}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Image source={require("../../assets/icon.png")} />
            <Text style={styles.imageTitle}>Subscribe to pay less!</Text>
            <Text style={styles.imageSubTitle}>
              Subscription discount 15% on all products
            </Text>
          </LinearGradient>
          <View>
            <Text style={styles.title}>Buy a subscription</Text>
            <View style={styles.radioWrapper}>
                {RadioOptions.map((option, index) => (
                  <MyRadioButton
                    key={index}
                    value={option.value}
                    title={option.title}
                    subTitle={option.subTitle}
                    price={option.price}
                    offPrice={option.offPrice}
                    checked={checked}
                    setChecked={setChecked}
                  />
                ))}
                <Button 
                    mode="contained" 
                    buttonColor={Colors["my-green-70"]} 
                    style={styles.buttonWrapper}
                    contentStyle={styles.buttonContent}
                    onPress={checked ? ()=>setPayDialog(true) : ()=>setWarnDialog(true)}>
                    Subscribe{checked ? ` for ${checked}` : ""}
                </Button>
            </View>
          </View>
        </ScrollView>
        <CommonDialog 
                visible={showWarnDialog} 
                hideDialog={hideWarnDialog} 
                content={"Please select one of the following plans"} 
                icon={"bell-alert"} 
                iconSize={36}
                buttonText1={"Close"}
                onPress1={hideWarnDialog}/>
        <CommonDialog 
                visible={showPayDialog} 
                hideDialog={hidePayDialog}
                content={"Payment successfull enjoy you subscription benefits"}
                icon={"hand-okay"}
                iconSize={36}
                buttonText1={"Close"}
                onPress1={hidePayDialog}/>
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
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 300,
    width: "100%",
    gap: 16,
  },
  imageTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: Colors["my-white"],
  },
  imageSubTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: Colors["my-white"],
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
  radioWrapper: {
    gap: 16,
    paddingVertical: 16,
  },
  buttonWrapper: {
    borderRadius: 16,
  },
  buttonContent: {
    height: 48,
  },
});