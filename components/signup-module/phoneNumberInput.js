import { Button } from "react-native-paper"
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

export default function PhoneNumberInput() {
    return (
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Authorization or registration</Text>
            <View style={styles.inputWrapper}>
                <TextInput mode="outlined" label="Enter phone number" keyboardType="number-pad"/>
                <Button mode="contained">Confirm</Button>
                <Text style={styles.infoText}>By clicking on the "Confirm Login" button, I agree to the terms of use of the service</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputWrapper: {
        gap: 16
    },
    inputLabel: {
        color: "#6AC949",
        fontSize: 12,
        fontWeight: 500,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: "#1A1A1A",
        textAlign: "center"
    },
    infoText: {
        color: "#8F8F8F",
        fontSize: 12,
        fontWeight: 500,
        padding: 8
    },
    buttonWrapper: {
        color: "#ffffff",
        borderRadius: 16,
        fontSize: 16,
        fontWeight: 700
    },
    contentWrapper: {
        width: "100%",
        gap: 16,
        justifyContent: "space-between"
    },
    inputStyle: {
        borderRadius: 128
    },
    buttonPressed: {
        bg: "#8FD776"
    }
});