import { StyleSheet, View, Text, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Colors } from "../../assets/constant";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AcquaintedInput({ setActiveComp }) {
  const Navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const formattedDate = date.toLocaleDateString();
  function handleButtonClick() {
    Navigation.navigate("RegistrationComplete");
  }
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Let's get acquainted!</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          mode="outlined"
          label="Your name"
          activeOutlineColor={Colors["my-green-60"]}
          outlineColor={Colors["my-green-60"]}
          style={styles.inputStyle}
        />
        <View>
          <TextInput
            mode="outlined"
            label="Date of Birth"
            value={formattedDate}
            //reditable={false}
            onPress={() => setShowPicker(true)}
            activeOutlineColor={Colors["my-green-60"]}
            outlineColor={Colors["my-green-60"]}
            style={styles.inputStyle}
            right={
              <TextInput.Icon
                icon="calendar"
                onPressIn={() => setShowPicker(true)}
              />
            }
          />
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowPicker(Platform.OS === "ios");
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}
        </View>
        <TextInput
          mode="outlined"
          label="Referral code"
          placeholder="_ _ _-_ _ _"
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
  buttonWrapper: {
    borderRadius: 16,
  },
  buttonContent: {
    height: 48,
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
