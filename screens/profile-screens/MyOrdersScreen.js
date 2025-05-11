import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import HeaderTitle from "../../components/HeaderTitle";
import { Colors } from "../../assets/constant";
import ClickableCustomView from "../../components/ClickableCustomView";
import CommonModal from "../../components/commonModal";
import { useState } from "react";
import OrderModalContent from "./modalContent/OrderModelContent";
const orderDetails = [
  {
    orderId: "ORD001",
    orderPrice: 249.99,
    orderDate: "2025-05-01",
    orderTime: "14:30",
    products: [
      {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
       {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
    ],
  },
  {
    orderId: "ORD002",
    orderPrice: 150.0,
    orderDate: "2025-05-02",
    orderTime: "10:15",
    products: [
      {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
    ],
  },
  {
    orderId: "ORD003",
    orderPrice: 399.5,
    orderDate: "2025-05-03",
    orderTime: "18:45",
    products: [
      {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
    ],
  },
  {
    orderId: "ORD004",
    orderPrice: 89.99,
    orderDate: "2025-05-04",
    orderTime: "09:00",
    products: [
      {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
    ],
  },
  {
    orderId: "ORD005",
    orderPrice: 215.75,
    orderDate: "2025-05-05",
    orderTime: "16:10",
    products: [
      {
        productImage: require("../../assets/product-1.png"),
        productName: "Betty Crocker Suddenly Pasta Salad, Classic, 15.5 oz",
        productPrice: "5.14",
      },
      {
        productImage: require("../../assets/product-2.png"),
        productName: "Hawaiian Punch Berry Blue, Juice Drink, 1 gal bottle",
        productPrice: "2.70",
      },
    ],
  },
];

export default function MyOrders() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setOrder] = useState(null);
  const hideModal = () => setShowModal(false);
  const Navigation = useNavigation();
  const handleBackButton = () => {
    Navigation.goBack();
  };
  const showOrderModal = (order) =>{
    setOrder(order);
    setShowModal(true)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton size={20} handleBackbutton={handleBackButton} />
        <HeaderTitle title={"My orders"} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {orderDetails.map((order, index) => (
          <ClickableCustomView
            key={index}
            title={`Order No.${order.orderId}`}
            subTitle={`$${order.orderPrice}`}
            isIcon={true}
            iconSize={36}
            icon={"package-variant-closed"}
            onPress={() => showOrderModal(order)}
          />
        ))}
      </ScrollView>
      <CommonModal
        visible={showModal}
        hideModal={hideModal}
        content={<OrderModalContent order={selectedOrder}/>}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: Colors["my-white"],
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
  scrollContainer: {
    gap: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
