import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";

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
      navigation.navigate("main");
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg-login.jpg")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.formContainer}
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputHalf}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.inputHalf}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
