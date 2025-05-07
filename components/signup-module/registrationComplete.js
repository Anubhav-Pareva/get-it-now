import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";
import { Colors } from "../../assets/constant";
import { Button } from "react-native-paper";

export default function RegistrationComplete({ setIsLogin }) {
  const handleButtonClick = () => {
    setIsLogin(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for registering!</Text>
      <View>
        <Image source={require("../../assets/tagphoto.png")} />
      </View>
      <View>
        <Image source={require("../../assets/delivery-guy.png")} />
      </View>
      <Button
        mode="contained"
        onPress={handleButtonClick}
        buttonColor={Colors["my-green-60"]}
        style={{ borderRadius: 10 }}
      >
        Let's Gooo!!!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors["my-green-30"],
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1A1A1A",
    textAlign: "center",
  },
});
