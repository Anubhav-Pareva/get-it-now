import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import PhoneNumberInput from "../components/signup-module/phoneNumberInput";
import OtpVerificationInput from "../components/signup-module/otpVerificationInput";
import CreatePasswordInput from "../components/signup-module/createPasswordInput";
import AcquaintedInput from "../components/signup-module/acquaintedInput";
import { useState } from "react";

export default function Signup(){
    const [activeComp, setActiveComp] = useState(1);
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView style={{width:"100%"}} contentContainerStyle={{width:"100%", alignItems:"center"}}>
            <View style={styles.imageWrapper}>
            <Image style={styles.imageStyle} source={require("../assets/tagphoto.png")}/>
            </View>
           { activeComp === 1 && <PhoneNumberInput setActiveComp={setActiveComp}/>}
            {activeComp === 2 && <OtpVerificationInput setActiveComp={setActiveComp}/>}
            { activeComp === 3 && <CreatePasswordInput setActiveComp={setActiveComp}/>}
            {activeComp === 4 && <AcquaintedInput setActiveComp={setActiveComp}/>}
             </ScrollView>
        </KeyboardAvoidingView>
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