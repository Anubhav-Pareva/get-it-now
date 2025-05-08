import {StyleSheet} from "react-native";
import Signup from "./screens/SignupScreen";
import RegistrationComplete from "./components/signup-module/registrationComplete";
import HomeNavigationScreen from "./screens/HomeNavigationScreen";
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDetails from "./screens/profile-screens/MyDetailScreen";
import { Provider } from "react-native-paper";
import Subscription from "./screens/profile-screens/SubscriptionScreen";
import MyAddress from "./screens/profile-screens/MyAddressScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLogin ? (
            <>
              <Stack.Screen name="HomeTab" component={HomeNavigationScreen} />
              <Stack.Screen name="MyDetails" component={MyDetails} />
              <Stack.Screen name="MySubscription" component={Subscription} />
              <Stack.Screen name="MyAddress" component={MyAddress}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="RegistrationComplete">
                {(props) => (
                  <RegistrationComplete {...props} setIsLogin={setIsLogin} />
                )}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
