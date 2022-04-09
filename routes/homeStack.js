import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { globalStyles } from "../styles/global";

export default function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "red" },
        }}
      >
        <Stack.Screen name="GameZone" component={Home} />
        <Stack.Screen
          name="Review Details"
          component={ReviewDetails}
          screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "red" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
