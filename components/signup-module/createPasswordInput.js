import { StyleSheet, Text, View } from "react-native"
import { Button, Icon, Input, Pressable } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreatePasswordInput(){
      const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPass, setConfirmPass] = useState(false);
    return(
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Create a password</Text>
            <View style={styles.inputWrapper}>
                <View>
                    <Text style={styles.inputLabel}>Create a password</Text>
                    <Input
                        type={showPassword ? "text" : "password"}
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        size={"2xl"}
                        borderRadius={"xl"}
                        focusOutlineColor={"#B5E4A4"}
                        style={styles.inputStyle}
                        InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}>
                            <Icon as={<MaterialIcons name={showPassword ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>}
                    />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Repeat password</Text>
                    <Input
                        type={showConfirmPass ? "text" : "password"}
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        size={"2xl"}
                        borderRadius={"xl"}
                        focusOutlineColor={"#B5E4A4"}
                        style={styles.inputStyle}
                        InputRightElement={<Pressable onPress={() => setConfirmPass(!showConfirmPass)}>
                            <Icon as={<MaterialIcons name={showConfirmPass ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>}
                    />
                </View>
                <Button
                    size={"lg"}
                    style={styles.buttonWrapper}
                    bg={"#45BC1B"}
                    _pressed={{
                        bg: "#8FD776"
                    }}
                    onPress={() => console.log("hello world")}>Continue</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
        padding:8
    },
    subTitle:{
        fontSize:16,
        fontWeight:500,
        color:"#6B6D7B",
        width:"70%",
        textAlign:"center",
        alignSelf:"center"
    },
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
    imageWrapper:{
        marginBottom:64
    },
    imageStyle:{
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