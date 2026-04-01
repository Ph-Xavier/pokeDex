import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Placeholder — tela de detalhe do Pokémon (a construir)
export default function Pokemon({ route }) {
  const { pokemonId, pokemonName } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{String(pokemonId).padStart(3, "0")}</Text>
      <Text style={styles.name}>{pokemonName?.toUpperCase()}</Text>
      <Text style={styles.hint}>TELA DE DETALHE{"\n"}EM CONSTRUÇÃO...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "monospace",
    fontSize: 20,
    color: "#FFD700",
    marginBottom: 8,
  },
  name: {
    fontFamily: "monospace",
    fontSize: 24,
    color: "#00FF41",
    marginBottom: 24,
  },
  hint: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#444",
    textAlign: "center",
  },
});
