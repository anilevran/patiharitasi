import "react-native-gesture-handler";
import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Pages/Home";
import { Signin } from "./src/Pages/Signin";
import { Signup } from "./src/Pages/Signup";
import { MainApp } from "./src/Pages/Mainapp";

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
