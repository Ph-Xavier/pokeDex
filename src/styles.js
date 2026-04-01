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

// ========== Estilos de Home ==========

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #cc0000;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  background-color: #aa0000;
  border-bottom-width: 3px;
  border-bottom-color: #880000;
`;

export const HomeInput = styled.TextInput`
  flex: 1;
  height: 46px;
  background-color: #1a1a2e;
  border-radius: 8px;
  padding-horizontal: 14px;
  color: #00ff41;
  font-size: 13px;
  border-width: 2px;
  border-color: #0d0d1a;
  margin-right: 10px;
`;

export const SubmitButton = styled(RectButton)`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: #cc0000;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: #ff4444;
  elevation: 4;
  opacity: ${(props) => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList`
  margin-top: 12px;
  padding-horizontal: 12px;
`;

export const User = styled.View`
  background-color: #1a1a2e;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #2a2a4e;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  background-color: #0d0d1a;
  border-width: 2px;
  border-color: #2a2a4e;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #00ff41;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 4px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Bio = styled.Text`
  font-size: 12px;
  color: #ffd700;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const ProfileButton = styled(RectButton)`
  background-color: #cc0000;
  border-radius: 8px;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  margin-top: 6px;
  width: 100%;
  border-width: 2px;
  border-color: #ff4444;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

