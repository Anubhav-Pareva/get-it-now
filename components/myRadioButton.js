import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Colors } from "../assets/constant";
export default function MyRadioButton({
  value,
  title,
  subTitle,
  price,
  offPrice,
  checked,
  setChecked
}) {
  return (
    <View style={styles.radioWrapper}>
      <RadioButton
        value={value}
        status={checked === value ? "checked" : "unchecked"}
        onPress={() => setChecked(value)}
        color={Colors["my-green-70"]}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleStyle}>{title}</Text>
        {subTitle && <Text style={styles.subTitleStyle}>{subTitle}</Text>}
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.priceStyle}>{price}</Text>
        {offPrice && <Text style={styles.offPriceStyle}>{offPrice}</Text>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors["my-green-20"],
    padding: 16,
    borderRadius: 16,
  },
  titleWrapper: {
    flex:1
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 700,
    color: Colors["my-green-dark"],
  },
  subTitleStyle: {
    fontSize: 12,
    fontWeight: 700,
    color: Colors["my-green-60"],
  },
  priceWrapper: {
    flexDirection: "row-reverse",
    gap: 8,
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-green-dark"],
  },
  offPriceStyle: {
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: "line-through",
    color: Colors["my-gray-40"],
  },
});