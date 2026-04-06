import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  BackgroundImage,
  FormContainer,
  InputRow,
  InputHalf,
  Button,
  ButtonText,
} from "../styles";

const Login = () => {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (!user) {
      Alert.alert(
        "Erro",
        "Nenhum treinador cadastrado. Por favor, cadastre-se.",
      );
      return;
    }

    const userJson = JSON.parse(user);
    if (userJson.nome === nome && userJson.password === password) {
      navigation.navigate("home");
    } else {
      Alert.alert("Erro", "Nome ou senha incorretos.");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/bg-login.png")}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
          >
            <FormContainer>
              <Image
                source={require("../../assets/logo-pokedex-option-2.png")}
                style={{ width: 260, height: 130, resizeMode: "contain", marginBottom: 24 }}
              />
              <InputRow>
                <InputHalf
                  placeholder="Nome"
                  value={nome}
                  onChangeText={setNome}
                  placeholderTextColor="#9094A6"
                />
                <InputHalf
                  placeholder="Senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  placeholderTextColor="#9094A6"
                />
              </InputRow>
              <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
              </Button>

              <Button onPress={handleCadastro}>
                <ButtonText>Cadastrar</ButtonText>
              </Button>
            </FormContainer>
          </ScrollView>
        </KeyboardAvoidingView>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
