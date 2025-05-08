import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../assets/constant";

export default function HeaderTitle({title}){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // horizontally center the text
    marginBottom: 4,
    marginLeft:"auto",
    marginRight:"auto",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors["my-black-2"],
    textAlign: "center",
  },
});