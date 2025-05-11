import { Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../assets/constant";

export default function OrderProductDetail({ product }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.detailProductWrapper}>
        <Image source={product.productImage} />
        <View style={styles.titlePriceWrapper}>
          <Text style={styles.nameStyle}>{product.productName}</Text>
          <Text style={styles.priceStyle}>${product.productPrice}</Text>
        </View>
      </View>
      <Divider style={styles.dividerStyle} />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
    width: "100%",
  },
  detailProductWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  dividerStyle: {
    backgroundColor: Colors["my-green-60"],
  },
  titlePriceWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 700,
    color: Colors["my-green-dark"],
    flexShrink: 1,
    flexWrap: "wrap",
  },
  priceStyle: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
});
