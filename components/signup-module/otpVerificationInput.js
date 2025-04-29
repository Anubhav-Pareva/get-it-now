import { StyleSheet, Text, View } from "react-native"
import { Button, HStack, Input } from "native-base";
import { useRef, useState } from "react";

export default function OtpVerificationInput(){
    const [otp, setOtp] = useState(['', '', '', '']);
        const inputs = useRef([]);
    
        const handleChange = (text, index) => {
            if (!/^\d?$/.test(text)) return; // Only digits
    
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
    
            // Move to next input if current one is filled
            if (text && index < inputs.current.length - 1) {
                inputs.current[index + 1].focus();
            }
        };
    
        const handleKeyPress = (e, index) => {
            if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                inputs.current[index - 1].focus();
            }
        };
    return(
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Enter code from SMS</Text>
            <Text style={styles.subTitle}>We have sent a message to
                phone +7 999 123 45 67</Text>
            <View style={styles.inputWrapper}>
                <View>
                    <HStack space={4} justifyContent="center" mt={5}>
                        {otp.map((digit, index) => (
                            <Input
                                key={index}
                                ref={el => (inputs.current[index] = el)}
                                value={digit}
                                onChangeText={text => handleChange(text, index)}
                                onKeyPress={e => handleKeyPress(e, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                textAlign="center"
                                fontSize="2xl"
                                width={12}
                                height={12}
                                borderWidth={2}
                                borderColor="gray.300"
                                borderRadius="md"
                                _focus={{ borderColor: "#B5E4A4", bg: "white" }}
                            />
                        ))}
                    </HStack>
                </View>
                <Button
                    size={"lg"}
                    style={styles.buttonWrapper}
                    bg={"#45BC1B"}
                    _pressed={{
                        bg: "#8FD776"
                    }}
                    onPress={() => console.log("hello world")}>Verify OTP</Button>
            </View>
            <Text style={styles.infoText}>By clicking on the "Confirm Login" button, I agree to the terms of use of the service</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        padding: 8
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 500,
        color: "#6B6D7B",
        width: "70%",
        textAlign: "center",
        alignSelf: "center"
    },
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
    imageWrapper: {
        marginBottom: 64
    },
    imageStyle: {
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