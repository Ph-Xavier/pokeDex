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
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from "../styles.js";

export default class Home extends Component {
  state = {
    newUser: "",
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem("users");
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem("users", JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    try {
      const { newUser, users } = this.state;
      if (!newUser.trim()) return;
      this.setState({ loading: true });

      const response = await api.get(`/api/v2/pokemon/${newUser.toLowerCase().trim()}`);

      if (users.find((u) => u.login === response.data.name)) {
        alert("Pokémon já adicionado");
        this.setState({ loading: false });
        return;
      }

      const data = {
        login:  response.data.name,
        name:   response.data.name,
        bio:    response.data.types.map((t) => t.type.name.toUpperCase()).join(" / "),
        avatar: response.data.sprites.front_default,
        id:     response.data.id,
      };

      this.setState({
        users: [...users, data],
        newUser: "",
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert("Pokémon não encontrado");
      this.setState({ loading: false });
    }
  };

  render() {
    const { newUser, users, loading } = this.state;
    return (
      <HomeContainer>
        <Form>
          <HomeInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="NOME DO POKÉMON..."
            placeholderTextColor="#4A4E69"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FBD743" />
            ) : (
              <Icon name="add" size={20} color="#FBD743" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={(user) => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} resizeMode="contain" />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
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
                    users: this.state.users.filter((u) => u.login !== item.login),
                  })
                }
                style={{ backgroundColor: "#1a1a1a", borderWidth: 1, borderColor: "#555" }}
              >
                <ProfileButtonText style={{ color: "#ff4444" }}>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </HomeContainer>
    );
  }
}
