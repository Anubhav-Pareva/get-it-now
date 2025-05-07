import {StyleSheet} from "react-native";
import Signup from "./screens/SignupScreen";
import RegistrationComplete from "./components/signup-module/registrationComplete";
import HomeNavigationScreen from "./screens/HomeNavigationScreen";
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDetails from "./screens/MyDetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <NavigationContainer>
      {isLogin ? (
        <HomeNavigationScreen />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="RegistrationComplete" >
            {(props) => (
              <RegistrationComplete {...props} setIsLogin={setIsLogin} />
            )}
          </Stack.Screen>
          <Stack.Screen name="MyDetails" component={MyDetails}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
