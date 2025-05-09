import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Colors } from "../../../assets/constant";
export default function EditDetailModalContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Name</Text>
      <View style={styles.inputWrapper}>
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
}
const styles = StyleSheet.create({
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
