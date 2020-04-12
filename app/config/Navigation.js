import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home"
      options={{
        headerShown: false
      }} component={Home} />
      <AppStack.Screen name="iAmRich" options={{
        headerStyle: {
          backgroundColor: '#000',
          shadowColor : '#000',
        },
        headerTitleStyle: {
          color: '#fff'
        },
        headerBackTitle: "Done",
        headerBackTitleStyle: {
          color: '#fff'
        },
        headerTintColor: '#fff'
      }} component={Detail} />
    </AppStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};
