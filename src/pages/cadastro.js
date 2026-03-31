import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BackgroundImage,
  CadastroContainer,
  CadastroInput,
  CadastroButton,
  CadastroButtonText,
} from "../styles";

export default class Cadastro extends Component {
  state = { email: "", password: "" };

  handleCadastro = async () => {
    const { email, password } = this.state;

    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    const user = { email, password };

    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Usuário cadastrado com sucesso!");
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      <BackgroundImage source={require("../../assets/bg-login.jpg")}>
        <CadastroContainer>
          <CadastroInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
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
