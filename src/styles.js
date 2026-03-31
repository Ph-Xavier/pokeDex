import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

// ========== Estilos de Login ==========

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.ImageBackground`
  resize-mode: cover;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-vertical: 12px;
`;

export const InputHalf = styled.TextInput`
  padding-vertical: 12px;
  padding-horizontal: 15px;
  width: 48%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  background-color: #fff;
  font-size: 14px;
`;

export const Input = styled.TextInput`
  margin-vertical: 12px;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  background-color: #fff;
  font-size: 14px;
`;

export const Button = styled(RectButton)`
  margin-vertical: 8px;
  padding-vertical: 12px;
  padding-horizontal: 20px;
  background-color: #007bff;
  border-radius: 8px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

// ========== Estilos de Cadastro ==========

export const CadastroContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CadastroInput = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-vertical: 8px;
  width: 80%;
  background-color: #f9f9f9;
`;

export const CadastroButton = styled(RectButton)`
  background-color: #007bff;
  border-radius: 8px;
  padding: 12px;
  width: 80%;
  align-items: center;
`;

export const CadastroButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
