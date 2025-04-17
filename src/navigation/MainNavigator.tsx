import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Home, Signup, OnBoard } from "../screens";
import routes from "../constants/routes";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.OnBoard}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.OnBoard} component={OnBoard} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Signup} component={Signup} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
