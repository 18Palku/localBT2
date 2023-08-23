import { StyleSheet, View } from "react-native";
import Status from "./components/Status";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//SCREENS
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Status />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 1,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
