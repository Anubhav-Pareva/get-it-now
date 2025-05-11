import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../../../assets/constant";
import OrderProductDetail from "../../../components/OrderProductDetail";

export default function OrderModalContent({order}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Order No. {order.orderId}</Text>
      <Text style={styles.listTitle}>Order List</Text>
      <View style={styles.detailWrapper}>
        <Divider style={{ backgroundColor: Colors["my-green-60"] }} />
        {order.products.map((product, index) => (
         <OrderProductDetail key={index} product={product} />
        ))}
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>Order Price</Text>
        <Text style={styles.price}>${7.84}</Text>
      </View>
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>12.03.2023</Text>
        <Text style={styles.date}>9:56</Text>
      </View>
    </ScrollView>
  );
}
const styles  =StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:700,
        color:Colors["my-black-2"],
        textAlign:"center"
    },
    listTitle:{
        fontSize:20,
        fontWeight:700,
        color:Colors["my-black-2"],
    },
    priceWrapper:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    price:{
        fontSize:20,
        fontWeight:700,
        color:Colors["my-black-2"],
    },
    dateWrapper:{
        flexDirection:"row",
        justifyContent:"space-between"

    },
    date:{
        fontSize:16,
        fontWeight:500,
        color:Colors["my-gray-60"],
    },
    detailWrapper:{
        gap:16,
        paddingVertical:16,
        width:"100%"
    }
});
