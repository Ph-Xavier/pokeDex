import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (!user) {
      Alert.alert("Erro", "Nenhum usuário cadastrado. Por favor, cadastre-se.");
      return;
    }

    const userJson = JSON.parse(user);
    if (userJson.email === email && userJson.password === password) {
      navigation.navigate("home");
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
    <Container>
      <BackgroundImage source={require("../../assets/bg-login.jpg")}>
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
              <InputRow>
                <InputHalf
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#999"
                />
                <InputHalf
                  placeholder="Senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  placeholderTextColor="#999"
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
