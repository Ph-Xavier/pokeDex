import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

const colors = {
  primary: '#E3350D',
  primaryDark: '#B82A0A',
  secondary: '#3B5FC9',
  accent: '#FBD743',
  accentDark: '#E5C33A',
  lcd: '#3DD9A0',
  lcdDark: '#2CB885',
  bg: '#1A1C23',
  card: '#252836',
  cardHighlight: '#2F3344',
  border: '#4A4E69',
  text: '#FFFFFF',
  textMuted: '#9094A6',
  danger: '#FF6B6B',
};


// ========== Login ==========

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg};
`;

export const BackgroundImage = styled.ImageBackground`
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
  border-radius: 4px;
  border-width: 2px;
  border-color: ${colors.border};
  background-color: ${colors.card};
  color: ${colors.text};
  font-size: 14px;
`;

export const Input = styled.TextInput`
  margin-vertical: 12px;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${colors.border};
  background-color: ${colors.card};
  color: ${colors.text};
  font-size: 14px;
`;

export const Button = styled(RectButton)`
  margin-vertical: 8px;
  padding-vertical: 14px;
  padding-horizontal: 20px;
  background-color: ${colors.primary};
  border-radius: 4px;
  width: 100%;
  align-items: center;
  elevation: 4;
`;

export const ButtonText = styled.Text`
  color: ${colors.text};
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

// ========== Cadastro ==========

export const CadastroContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.bg};
`;

export const CadastroInput = styled.TextInput`
  border-width: 2px;
  border-color: ${colors.border};
  border-radius: 4px;
  padding: 12px;
  margin-vertical: 8px;
  width: 80%;
  background-color: ${colors.card};
  color: ${colors.text};
  font-size: 14px;
`;

export const CadastroButton = styled(RectButton)`
  background-color: ${colors.primary};
  border-radius: 4px;
  padding: 14px;
  width: 80%;
  align-items: center;
  elevation: 4;
`;

export const CadastroButtonText = styled.Text`
  color: ${colors.text};
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;


// ========== HOME ==========

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${colors.bg};
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  background-color: ${colors.card};
  border-bottom-width: 3px;
  border-bottom-color: ${colors.primary};
`;

export const HomeInput = styled.TextInput`
  flex: 1;
  height: 44px;
  background-color: ${colors.bg};
  border-radius: 4px;
  padding-horizontal: 14px;
  color: ${colors.lcd};
  font-size: 13px;
  border-width: 2px;
  border-color: ${colors.border};
  margin-right: 10px;
  letter-spacing: 1px;
`;

export const SubmitButton = styled(RectButton)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 4;
  opacity: ${(props) => (props.loading ? 0.5 : 1)};
`;

/* Lista */
export const List = styled.FlatList`
  flex: 1;
  padding-horizontal: 10px;
  padding-top: 10px;
`;

/* Card do pokémon */
export const PokemonCard = styled.View`
  background-color: ${colors.card};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: ${colors.border};
  border-top-width: 3px;
  border-top-color: ${colors.accent};
  align-items: center;
  elevation: 3;
`;

/* Sprite em fundo claro (contraste com o app escuro) */
export const PokemonSprite = styled.Image`
  width: 96px;
  height: 96px;
  background-color: #e8e8e0;
  border-width: 3px;
  border-color: ${colors.accent};
  border-radius: 4px;
`;

export const PokemonName = styled.Text`
  font-size: 14px;
  color: ${colors.accent};
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 3px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const PokemonType = styled.Text`
  font-size: 11px;
  color: ${colors.lcd};
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const ProfileButton = styled(RectButton)`
  background-color: ${colors.primary};
  border-radius: 4px;
  height: 38px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  margin-top: 5px;
  width: 100%;
  elevation: 2;
`;

export const ProfileButtonText = styled.Text`
  color: ${colors.text};
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;


// ========== DETALHE DO POKÉMON ==========

export const Header = styled.View`
  align-items: center;
  padding: 20px 20px 18px;
  background-color: ${colors.card};
  border-bottom-width: 3px;
  border-bottom-color: ${colors.primary};
`;

export const PokemonImageDetail = styled.Image`
  width: 120px;
  height: 120px;
  background-color: #e8e8e0;
  border-width: 4px;
  border-color: ${colors.accent};
  border-radius: 4px;
`;

export const PokemonNameDetail = styled.Text`
  font-size: 20px;
  color: ${colors.accent};
  font-weight: bold;
  margin-top: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const PokemonInfoDetail = styled.Text`
  font-size: 11px;
  color: ${colors.lcd};
  margin-top: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

/* Lista de movimentos */
export const Moves = styled.FlatList`
  padding-horizontal: 10px;
  padding-top: 10px;
  background-color: ${colors.bg};
`;

/* Item do movimento — borda esquerda vermelha */
export const MoveItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.card};
  border-radius: 4px;
  padding: 14px 14px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${colors.border};
  border-left-width: 4px;
  border-left-color: ${colors.primary};
`;

/* Badge numerado do slot do ataque (1, 2, 3, 4) */
export const MoveSlot = styled.View`
  width: 28px;
  height: 28px;
  background-color: ${colors.accent};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

export const MoveSlotText = styled.Text`
  color: ${colors.bg};
  font-size: 13px;
  font-weight: bold;
`;

export const MoveInfo = styled.View`
  flex: 1;
`;

export const MoveName = styled.Text`
  font-size: 13px;
  color: ${colors.text};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const MoveType = styled.Text`
  font-size: 10px;
  color: ${colors.textMuted};
  margin-top: 3px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

/* Legado */
export const MoveIcon = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${colors.cardHighlight};
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;
