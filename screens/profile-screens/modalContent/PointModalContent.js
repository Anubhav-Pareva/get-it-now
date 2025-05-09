import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ClickableCustomView from "../../../components/ClickableCustomView";
import { Colors } from "../../../assets/constant";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import CommonSnackbar from "../../../components/commonSnackbar";

export default function PointModalContent({refferalCode}) {
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  
   const copyToClipboard = (text) => {
          Clipboard.setStringAsync(text);
          setVisibleSnackbar(true);
        }
        const dismissSnackbar = () => {
          setVisibleSnackbar(false);
        };
    return (
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>How to get bonuses?</Text>
        <Text style={styles.para}>
          To receive bonuses, copy your personal code in your profile and send
          it to a friend. After a friend makes their first purchase, both of you
          will receive 500 points in your account!
        </Text>
        <Text style={styles.title}>How to spend bonuses?</Text>
        <Text style={styles.para}>
          Bonuses can pay 50% of any purchase! 1 bonus - 1 ₽
        </Text>
        <ClickableCustomView
          title={refferalCode}
          subTitle="Copy the code and send it to a friend"
          isIcon={true}
          icon={"content-copy"}
          onPress={()=>copyToClipboard(refferalCode)}
        />
        <CommonSnackbar
                visible={visibleSnackbar}
                message={"Code copy successfully"}
                duration={1000}
                onDismissSnackBar={dismissSnackbar}
              />
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap:16
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
  para: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors["my-black-2"],
  },
});