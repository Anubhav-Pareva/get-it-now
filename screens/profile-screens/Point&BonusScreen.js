import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import HeaderTitle from "../../components/HeaderTitle";
import { Colors } from "../../assets/constant";
import { useNavigation } from "@react-navigation/native";
import ClickableCustomView from "../../components/ClickableCustomView";
import { Button, Divider, Icon } from "react-native-paper";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import CommonSnackbar from "../../components/commonSnackbar";
import CommonModal from "../../components/commonModal";
import PointModalContent from "./modalContent/PointModalContent";

const historyDetails = [
  {
    date: "2023-05-10",
    type: "Accrued",
    amount: "+500",
  },
  {
    date: "2023-04-10",
    type: "Spent",
    amount: "-30",
  },
  {
    date: "2023-03-10",
    type: "Spent",
    amount: "-3",
  },
  {
    date: "2023-02-10",
    type: "Accrued",
    amount: "+500",
  },
  {
    date: "2023-01-10",
    type: "Spent",
    amount: "-30",
  },
  {
    date: "2023-05-10",
    type: "Accrued",
    amount: "+500",
  },
  {
    date: "2023-04-10",
    type: "Spent",
    amount: "-30",
  },
  {
    date: "2023-03-10",
    type: "Spent",
    amount: "-3",
  },
  {
    date: "2023-02-10",
    type: "Accrued",
    amount: "+500",
  },
  {
    date: "2023-01-10",
    type: "Spent",
    amount: "-30",
  },
];
export default function PointandBonus() {
  const [showAll, setShowAll] = useState(false);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [showPointModal, setPointModal] = useState(false);
  const Navigation = useNavigation();
  const displayedHistory =
    historyDetails && historyDetails.length > 0
      ? showAll
        ? historyDetails
        : historyDetails.slice(0, 4)
      : [];
  const hidePointModal = () => setPointModal(false);
  const handleBackButton = () => {
    Navigation.goBack();
  };
  const copyToClipboard = (text) => {
    Clipboard.setStringAsync(text);
    setVisibleSnackbar(true);
  };
  const dismissSnackbar = () => {
    setVisibleSnackbar(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton size={20} handleBackbutton={handleBackButton} />
        <HeaderTitle title={"Points and bonuses"} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ClickableCustomView
          title="61 points"
          subTitle="My bonuses"
          isIcon={true}
          icon={"information-outline"}
          onPress={() => setPointModal(true)}
        />
        <ClickableCustomView
          title="ААА117"
          subTitle="Copy the code and send it to a friend"
          isIcon={true}
          icon={"content-copy"}
          onPress={copyToClipboard}
        />
        <View style={styles.historyWrapper}>
          <Text style={styles.historyTitle}>
            History of write-offs and accruals
          </Text>
          <View style={styles.historyView}>
            {displayedHistory.length === 0 ? (
              <Text>No History Found</Text>
            ) : (
              <>
                {showAll && (
                  <Button
                    textColor={Colors["my-gray-30"]}
                    onPress={() => setShowAll(false)}
                  >
                    Hide
                  </Button>
                )}
                {displayedHistory.map((history, index) => (
                  <View key={index}>
                    <View style={styles.historyStyle}>
                      <View>
                        <Text style={styles.historyType}>{history.type}</Text>
                        <Text style={styles.historyDate}>{history.date}</Text>
                      </View>
                      <View style={styles.amountWrapper}>
                        <Text
                          style={
                            history.type === "Spent"
                              ? styles.spendStyle
                              : styles.accuredStyle
                          }
                        >
                          {history.amount}
                        </Text>
                        <Icon
                          source={"lightning-bolt"}
                          size={20}
                          color={
                            history.type === "Spent"
                              ? Colors["my-black-2"]
                              : Colors["my-green-70"]
                          }
                        />
                      </View>
                    </View>
                    <Divider />
                  </View>
                ))}
                {!showAll && (
                  <Button
                    textColor={Colors["my-gray-30"]}
                    onPress={() => setShowAll(true)}
                  >
                    Show All
                  </Button>
                )}
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <CommonModal
        visible={showPointModal}
        hideModal={hidePointModal}
        content={<PointModalContent refferalCode={"AAA117"} />}
      />
      <CommonSnackbar
        visible={visibleSnackbar}
        message={"Code copy successfully"}
        duration={1000}
        onDismissSnackBar={dismissSnackbar}
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
  historyWrapper: {
    gap: 12,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
  historyView: {
    backgroundColor: Colors["my-green-30"],
    width: "100%",
    borderRadius: 8,
    padding: 8,
  },
  historyStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
    alignItems: "center",
  },
  historyType: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-green-dark"],
  },
  historyDate: {
    fontSize: 12,
    fontWeight: 500,
    color: Colors["my-gray-40"],
  },
  amountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  spendStyle: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-black-2"],
  },
  accuredStyle: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors["my-green-60"],
  },
});
