import { Icon, Snackbar } from "react-native-paper";
import { Colors } from "../assets/constant";

export default function CommonSnackbar({visible, onDismissSnackBar, message, duration=1000}){
    return (
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={duration}
        style={{ backgroundColor: Colors["my-green-70"] }}
      >
        {message}
      </Snackbar>
    );
}