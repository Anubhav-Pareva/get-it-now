import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Colors } from "../../assets/constant";

export default function PhoneNumberInput({setActiveComp, userEmail, setUserEmail }) {
  function handleButtonClick(){
    setActiveComp(2);
  }
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Authorization or registration</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          mode="outlined"
          label="Enter email address"
          value={userEmail}
          onChangeText={(text)=>setUserEmail(text)}
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          style={styles.inputStyle}
        />
        <Button
          mode="contained"
          onPress={handleButtonClick}
          buttonColor={Colors["my-green-60"]}
          contentStyle={styles.buttonContent}
          style={styles.buttonWrapper}
        >
           Confirm Login
        </Button>
      </View>
      <Text style={styles.infoText}>
        By clicking on the "Confirm Login" button, I agree to the terms of use
        of the service
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 16
  },
  buttonContent: {
    height: 48
  },
  inputWrapper: {
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors["my-black"],
    textAlign: "center",
  },
  infoText: {
    color: Colors["my-gray-text"],
    fontSize: 12,
    fontWeight: 500,
    padding: 8,
  },
  contentWrapper: {
    width: "100%",
    gap: 16,
    justifyContent: "space-between",
  },
  inputStyle: {
    borderRadius: 160,
    backgroundColor: Colors["my-white"]
  },
});
