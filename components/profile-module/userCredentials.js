import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "../../assets/constant";
import { Button, TextInput } from "react-native-paper";
import CommonDialog from "../commonDialog";
import { useState } from "react";

export default function UserCredentials() {
    const [openSignDialog, setSignDialog] = useState(false);
    const [openDeleteDialog, setDeleteDialog] = useState(false);
    const hideSignDialog = () => setSignDialog(false);
    const hideDeleteDialog = () => setDeleteDialog(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credentials</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          label="Phone"
          value="+91-8800-2567-25"
          editable={false}
          mode="outlined"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          theme={{
            colors: {
              primary: Colors["my-green-60"],
              onSurfaceVariant: Colors["my-green-60"],
            },
          }}
        />
        <TextInput
          label="Email"
          value="anubhavparevaji@gmail.com"
          editable={false}
          mode="outlined"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          theme={{
            colors: {
              primary: Colors["my-green-60"],
              onSurfaceVariant: Colors["my-green-60"],
            },
          }}
        />
        <TextInput
          label="Date of Birth"
          value="08-july-1999"
          editable={false}
          mode="outlined"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          theme={{
            colors: {
              primary: Colors["my-green-60"],
              onSurfaceVariant: Colors["my-green-60"],
            },
          }}
        />
        <Button
          mode="outlined"
          textColor={Colors["my-green-70"]}
          style={{ borderColor: Colors["my-green-70"], marginTop: 48 }}
          onPress={() => setSignDialog(true)}
        >
          Sign-out
        </Button>
        <Button
          textColor={Colors["my-red"]}
          onPress={() => setDeleteDialog(true)}
        >
          Delete account
        </Button>
      </View>
      <CommonDialog
        visible={openSignDialog}
        hideDialog={hideSignDialog}
        icon={"alert"}
        iconSize={48}
        content={"Are you sure you want to sign out?"}
        buttonText1={"Cancel"}
        buttonText2={"Sign-out"}
        onPress1={hideSignDialog}
        onPress2={hideSignDialog}
      />
      <CommonDialog
        visible={openDeleteDialog}
        hideDialog={hideDeleteDialog}
        icon={"alert"}
        iconSize={48}
        iconColor={Colors["my-red"]}
        content={"Are you sure you want to delete account?"}
        buttonText1={"Cancel"}
        buttonText2={"Delete"}
        onPress1={hideDeleteDialog}
        onPress2={hideDeleteDialog}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
  inputWrapper: {
    gap: 12,
  },
});
