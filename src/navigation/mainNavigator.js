import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Zone" component={ZoneScreen} />
        <Stack.Screen name="Bar" component={BarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
