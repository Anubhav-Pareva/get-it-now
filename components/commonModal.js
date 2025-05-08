import { Button, IconButton, Modal, Portal } from "react-native-paper";
import { Colors } from "../assets/constant";
import {  StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommonModal({visible, hideModal, containerStyle, content}){
    return (
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[styles.modalContainer, containerStyle]}
        >
          <SafeAreaView style={{flex:1, paddingHorizontal:16, width:"100%"}}>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <IconButton icon={"window-close"} onPress={hideModal} />
            </View>
            {content}
          </SafeAreaView>
        </Modal>
      </Portal>
    );
}
const styles = StyleSheet.create({
    modalContainer:{
        maxHeight:"80%",
        minHeight:"60%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors["my-white"],
        borderRadius:16
    }
});