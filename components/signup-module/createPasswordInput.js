import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Colors } from "../../assets/constant";

export default function CreatePasswordInput({ setActiveComp }) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setConfirmPass] = useState(true);
  function handleButtonClick() {
    setActiveComp(4);
  }
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Create a password</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          mode="outlined"
          secureTextEntry={showPassword}
          label="Create a password"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          style={styles.inputStyle}
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye" : "eye-off"}
            />
          }
        />
        <TextInput
          mode="outlined"
          label="Repeat password"
          secureTextEntry={setConfirmPass}
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          style={styles.inputStyle}
          right={
            <TextInput.Icon
              onPress={() => setConfirmPass(!showConfirmPass)}
              icon={showConfirmPass ? "eye" : "eye-off"}
            />
          }
        />

        <Button
          mode="contained"
          onPress={handleButtonClick}
          buttonColor={Colors["my-green-60"]}
          style={{ borderRadius: 10 }}
        >
          Continue
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#6B6D7B",
    width: "70%",
    textAlign: "center",
    alignSelf: "center",
  },
  inputWrapper: {
    gap: 16,
  },
  inputLabel: {
    color: "#6AC949",
    fontSize: 12,
    fontWeight: 500,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1A1A1A",
    textAlign: "center",
  },
  infoText: {
    color: "#8F8F8F",
    fontSize: 12,
    fontWeight: 500,
    padding: 8,
  },
  buttonWrapper: {
    color: "#ffffff",
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 700,
  },
  imageWrapper: {
    marginBottom: 64,
  },
  imageStyle: {},
  contentWrapper: {
    width: "100%",
    gap: 16,
    justifyContent: "space-between",
  },
  inputStyle: {
    borderRadius: 128,
  },
});
