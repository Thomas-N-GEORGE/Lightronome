// Main App.

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsScreen from "./components/settings";
import LightronomeScreen from "./components/lightronome";
import { BeatContext } from "./components/utils";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function App() {
  // Our Beat context object
  const [beat, setBeat] = useState(null);
  return (
    <NavigationContainer theme={MyTheme}>
      <BeatContext.Provider
        value={{
          beat,
          setBeat,
        }}
      >
        <Stack.Navigator
          initialRouteName="Settings"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3a5fa4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Settings" }}
          />

          <Stack.Screen
            name="Lightronome"
            component={LightronomeScreen}
            options={{ title: "Lightronome" }}
          />
        </Stack.Navigator>
      </BeatContext.Provider>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
