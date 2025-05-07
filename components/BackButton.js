import { IconButton } from "react-native-paper";
import { Colors } from "../assets/constant";

export default function BackButton({handleBackbutton = () => {alert("Back button clicked!")} }) {
  return (
    <IconButton
      mode="contained"
      icon="arrow-left"
      iconColor={Colors["my-green-70"]}
      containerColor={Colors["my-green-20"]}
      size={30}
      onPress={handleBackbutton}
    />
  );
}
