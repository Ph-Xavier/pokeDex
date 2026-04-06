import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1A1C23" },
          headerTintColor: "#FBD743",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "PokéDex",
            headerTitleStyle: { color: "#f36404", fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro Pokédex",
            headerTitleStyle: { color: "#f36404", fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "POKÉDEX",
            headerTitleStyle: { color: "#FFD700", fontWeight: "bold", letterSpacing: 2 },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="pokemon"
          component={Pokemon}
          options={{
            title: "POKÉMON",
            headerTitleStyle: { color: "#FFD700", fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

