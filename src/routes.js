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
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "PokéDex",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#f36404", fontWeight: "bold" },
          }}
        />
        {/* <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro Pokédex",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#fff", fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Pokédex",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#fff", fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="pokemon"
          component={Pokemon}
          options={{
            title: "Pokémon",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#fff", fontWeight: "bold" },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
