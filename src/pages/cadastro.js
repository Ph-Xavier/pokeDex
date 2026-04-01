import React, { Component } from "react";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BackgroundImage,
  CadastroContainer,
  CadastroInput,
  CadastroButton,
  CadastroButtonText,
} from "../styles";

export default class Cadastro extends Component {
  state = { nome: "", password: "" };

  handleCadastro = async () => {
    const { nome, password } = this.state;

    if (!nome || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    const user = { nome, password };

    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Treinador cadastrado com sucesso!");
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      <BackgroundImage source={require("../../assets/bg-login.jpg")}>
        <CadastroContainer>
          <Image
            source={require("../../assets/logo-pokedex-option-2.png")}
            style={{
              width: 260,
              height: 130,
              resizeMode: "contain",
              marginBottom: 24,
            }}
          />
          <CadastroInput
            placeholder="Nome de Treinador"
            value={this.state.nome}
            onChangeText={(nome) => this.setState({ nome })}
          />
          <CadastroInput
            placeholder="Senha"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <CadastroButton onPress={this.handleCadastro}>
            <CadastroButtonText>Cadastrar</CadastroButtonText>
          </CadastroButton>
        </CadastroContainer>
      </BackgroundImage>
    );
  }
}
