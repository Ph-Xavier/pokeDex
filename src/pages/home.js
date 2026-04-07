import React, { Component } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api.js";
import {
  HomeContainer,
  Form,
  HomeInput,
  SubmitButton,
  List,
  PokemonCard,
  PokemonSprite,
  PokemonName,
  PokemonType,
  ProfileButton,
  ProfileButtonText,
} from "../styles.js";

export default class Home extends Component {
  state = {
    newPokemon: "",
    pokemons: [],
    loading: false,
  };

  async componentDidMount() {
    const pokemons = await AsyncStorage.getItem("pokemons");
    if (pokemons) {
      this.setState({ pokemons: JSON.parse(pokemons) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { pokemons } = this.state;
    if (prevState.pokemons !== pokemons) {
      AsyncStorage.setItem("pokemons", JSON.stringify(pokemons));
    }
  }

  handleAddPokemon = async () => {
    try {
      const { newPokemon, pokemons } = this.state;
      if (!newPokemon.trim()) return;
      this.setState({ loading: true });

      const response = await api.get(`/api/v2/pokemon/${newPokemon.toLowerCase().trim()}`);

      if (pokemons.find((p) => p.login === response.data.name)) {
        alert("Pokémon já adicionado");
        this.setState({ loading: false });
        return;
      }

      const data = {
        login:  response.data.name,
        name:   response.data.name,
        types:  response.data.types.map((t) => t.type.name.toUpperCase()).join(" / "),
        sprite: response.data.sprites.front_default,
        id:     response.data.id,
      };

      this.setState({
        pokemons: [...pokemons, data],
        newPokemon: "",
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert("Pokémon não encontrado");
      this.setState({ loading: false });
    }
  };

  render() {
    const { newPokemon, pokemons, loading } = this.state;
    return (
      <HomeContainer>
        <Form>
          <HomeInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="NOME DO POKÉMON..."
            placeholderTextColor="#4A4E69"
            value={newPokemon}
            onChangeText={(text) => this.setState({ newPokemon: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddPokemon}
          />
          <SubmitButton loading={loading} onPress={this.handleAddPokemon}>
            {loading ? (
              <ActivityIndicator color="#FBD743" />
            ) : (
              <Icon name="add" size={20} color="#FBD743" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.login}
          renderItem={({ item }) => (
            <PokemonCard>
              <PokemonSprite source={{ uri: item.sprite }} resizeMode="contain" />
              <PokemonName>{item.name}</PokemonName>
              <PokemonType>{item.types}</PokemonType>
              <ProfileButton
                onPress={() =>
                  this.props.navigation.navigate("pokemon", { pokemon: item })
                }
              >
                <ProfileButtonText>Ver Pokémon</ProfileButtonText>
              </ProfileButton>
              <ProfileButton
                onPress={() =>
                  this.setState({
                    pokemons: this.state.pokemons.filter((p) => p.login !== item.login),
                  })
                }
                style={{ backgroundColor: "#1a1a1a", borderWidth: 1, borderColor: "#555" }}
              >
                <ProfileButtonText style={{ color: "#ff4444" }}>Excluir</ProfileButtonText>
              </ProfileButton>
            </PokemonCard>
          )}
        />
      </HomeContainer>
    );
  }
}
