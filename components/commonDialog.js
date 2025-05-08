import { Text } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import { Colors } from "../assets/constant";

export default function CommonDialog({  visible=false, 
                                        hideDialog, 
                                        icon,
                                        iconSize=24,
                                        iconColor=Colors["my-green-70"], 
                                        content, 
                                        title, 
                                        buttonText1, 
                                        buttonText2, 
                                        onPress1, 
                                        onPress2 }) {
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
            {icon && <Dialog.Icon icon={icon} size={iconSize} color={iconColor} />}
          {title && <Dialog.Title>{title}</Dialog.Title>}
          <Dialog.Content style={{marginTop:8}}>
            <Text variant="bodyMedium">{content}</Text>
          </Dialog.Content>
          {(buttonText1 || buttonText2) && <Dialog.Actions>
            {buttonText1 && <Button onPress={onPress1} textColor={Colors["my-green-70"]}>{buttonText1}</Button>}
            {buttonText2 && <Button onPress={onPress2} textColor={Colors["my-red"]}>{buttonText2}</Button>}
          </Dialog.Actions>}
        </Dialog>
      </Portal>
    );
}