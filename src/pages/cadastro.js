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
  state = { trainerName: "", trainerPassword: "" };

  handleCadastro = async () => {
    const { trainerName, trainerPassword } = this.state;

    if (!trainerName || !trainerPassword) {
      alert("Preencha todos os campos.");
      return;
    }

    const trainer = { trainerName, trainerPassword };

    await AsyncStorage.setItem("trainer", JSON.stringify(trainer));
    alert("Treinador cadastrado com sucesso!");
    
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      <BackgroundImage source={require("../../assets/bg-login.png")} resizeMode="cover">
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
            placeholderTextColor="#9094A6"
            value={this.state.trainerName}
            onChangeText={(trainerName) => this.setState({ trainerName })}
          />
          <CadastroInput
            placeholder="Senha"
            placeholderTextColor="#9094A6"
            secureTextEntry={true}
            value={this.state.trainerPassword}
            onChangeText={(trainerPassword) => this.setState({ trainerPassword })}
          />
          <CadastroButton onPress={this.handleCadastro}>
            <CadastroButtonText>Cadastrar</CadastroButtonText>
          </CadastroButton>
        </CadastroContainer>
      </BackgroundImage>
    );
  }
}
