import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { Colors } from "../assets/constant"
import { IconButton } from "react-native-paper";

export default function ClickableCustomView({
                                                title = "Title", 
                                                subTitle, 
                                                onPress= ()=>{alert("pressed")},
                                                isIcon=false,
                                                icon,
                                                iconSize=24,
                                                iconColor=Colors["my-green-70"],
                                                style
                                            }){
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={Colors["my-green-10"]}
        style={style}
      >
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            <Text style={styles.title}>{title}</Text>
          </View>
          {!isIcon && <IconButton 
                            icon="arrow-right" 
                            iconColor={Colors["my-green-70"]} />}
          {isIcon && <IconButton 
                            icon={icon} 
                            size={iconSize}
                            iconColor={iconColor} />}
        </View>
      </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors["my-green-20"],
        borderRadius:16,
        paddingVertical:14,
        paddingHorizontal:16,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    textWrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        gap:8
    },
    title:{
        fontWeight:"700",
        fontSize:16,
        color:Colors["my-green-dark"]
    },
    subTitle:{
        fontWeight:"700",
        color:Colors["my-gray-40"],
        fontSize:14
    }
})