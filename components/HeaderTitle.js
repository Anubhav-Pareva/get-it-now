import { StyleSheet, Text } from "react-native"

export default function HeaderTitle({title}){
    return(
    <Text style={styles.title}>{title}</Text>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: "#1A1A1A",
        textAlign: "center",
    }
})