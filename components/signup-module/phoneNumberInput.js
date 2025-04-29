import { Button, Input } from "native-base";
import { StyleSheet, Text, View } from "react-native"

export default function PhoneNumberInput(){
    return(
        <View style={styles.contentWrapper}>
                    <Text style={styles.title}>Authorization or registration</Text>
                    <View style={styles.inputWrapper}>
                        <View>
                    <Text style={styles.inputLabel}>Enter phone number</Text>
                    <Input
                        placeholder='+91-8888-XXXX-00'
                        errorStyle={{ color: 'red' }}
                        value={digit}
                        errorMessage='ENTER A VALID ERROR HERE'
                        size={"2xl"}
                        borderRadius={"xl"}
                            focusOutlineColor={"#B5E4A4"}
                        style={styles.inputStyle}
                    />
                            </View>
                    <Button 
                            size={"lg"}
                            style={styles.buttonWrapper}
                                bg={"#45BC1B"}
                            _pressed={{
                                bg:"#8FD776"
                            }}
                            onPress={() => console.log("hello world")}>Confirm Login</Button>
                        </View>
                    <Text style={styles.infoText}>By clicking on the "Confirm Login" button, I agree to the terms of use of the service</Text>
                    </View>
    )
}
const styles = StyleSheet.create({
    inputWrapper:{
        gap:16
    },
    inputLabel:{
        color:"#6AC949",
        fontSize:12,
        fontWeight:500,
        paddingHorizontal:12
    },
    title:{
        fontSize:20,
        fontWeight:700,
        color:"#1A1A1A",
        textAlign:"center"
    },
    infoText:{
        color:"#8F8F8F",
        fontSize:12,
        fontWeight:500,
        padding:8
    },
    buttonWrapper:{
        color:"#ffffff",
        borderRadius:16,
        fontSize:16,
        fontWeight:700
    },
    contentWrapper:{
        width:"100%",
        gap:16,
        justifyContent:"space-between"
    },
    inputStyle:{
        borderRadius:128
    },
    buttonPressed:{
        bg:"#8FD776"
    }
});