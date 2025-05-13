import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useRef, useState } from "react";

export default function OtpVerificationInput({setActiveComp, userEmail}) {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);
    function handleButtonClick(){
        setActiveComp(3)
    }
    const handleChange = (text, index) => {
        if (!/^\d?$/.test(text)) return;

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Enter code from SMS</Text>
            <Text style={styles.subTitle}>We have sent a otp mail to your email {userEmail}</Text>
            <View style={styles.inputWrapper}>
                <View style={styles.otpRow}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={el => (inputs.current[index] = el)}
                            value={digit}
                            onChangeText={text => handleChange(text, index)}
                            onKeyPress={e => handleKeyPress(e, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            mode="outlined"
                            style={styles.otpInput}
                            theme={{ colors: { primary: "#B5E4A4" } }}
                        />
                    ))}
                </View>
                <Button
                    mode="contained"
                    onPress={handleButtonClick}
                    contentStyle={styles.buttonContent}
                    style={styles.buttonWrapper}
                    buttonColor="#45BC1B"
                >
                    Verify OTP
                </Button>
            </View>
            <Text style={styles.infoText}>
                By clicking on the "Confirm Login" button, I agree to the terms of use of the service
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#6B6D7B",
        width: "70%",
        textAlign: "center",
        alignSelf: "center"
    },
    inputWrapper: {
        gap: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1A1A1A",
        textAlign: "center"
    },
    infoText: {
        color: "#8F8F8F",
        fontSize: 12,
        fontWeight: "500",
        padding: 8
    },
    buttonWrapper: {
        borderRadius: 16
    },
    buttonContent: {
        height: 48
    },
    contentWrapper: {
        width: "100%",
        gap: 16,
        justifyContent: "space-between"
    },
    otpRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        marginTop: 20
    },
    otpInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 24
    }
});
