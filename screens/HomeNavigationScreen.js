import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./profile-screens/ProfileScreen";
import { Icon } from "react-native-paper";
import { Colors } from "../assets/constant";

const Tab = createBottomTabNavigator();
export default function HomeNavigationScreen() {
    return (
      <>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarActiveTintColor: Colors["my-green-70"],
              tabBarInactiveTintColor: Colors["my-gray-60"],
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    source={focused ? "home" : "home-outline"}
                    size={30}
                    color={
                      focused ? Colors["my-green-70"] : Colors["my-gray-60"]
                    }
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarActiveTintColor: Colors["my-green-70"],
              tabBarInactiveTintColor: Colors["my-gray-60"],
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    source={focused ? "cart" : "cart-outline"}
                    size={30}
                    color={
                      focused ? Colors["my-green-70"] : Colors["my-gray-60"]
                    }
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarActiveTintColor: Colors["my-green-70"],
              tabBarInactiveTintColor: Colors["my-gray-60"],
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    source={focused ? "account" : "account-outline"}
                    size={30}
                    color={
                      focused ? Colors["my-green-70"] : Colors["my-gray-60"]
                    }
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </>
    );
}