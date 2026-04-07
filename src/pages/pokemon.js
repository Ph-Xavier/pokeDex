import React, { Component } from "react";
import api from "../services/api.js";
import {
  Container,
  Header,
  PokemonImageDetail,
  PokemonNameDetail,
  PokemonInfoDetail,
  Moves,
  MoveItem,
  MoveSlot,
  MoveSlotText,
  MoveInfo,
  MoveName,
  MoveType,
} from "../styles.js";

function getRarity(captureRate, isLegendary, isMythical) {
  if (isMythical)   return "◆ MYTHICAL";
  if (isLegendary)  return "★ LEGENDARY";
  if (captureRate <= 45)  return "▲ RARE";
  if (captureRate <= 120) return "● UNCOMMON";
  return "○ COMMON";
}

export default class Pokemon extends Component {
  state = {
    moves: [],
    rarity: "",
  };

  async componentDidMount() {
    const { route } = this.props;
    const { pokemon } = route.params;

    const [pokeRes, speciesRes] = await Promise.all([
      api.get(`/api/v2/pokemon/${pokemon.login}`),
      api.get(`/api/v2/pokemon-species/${pokemon.login}`),
    ]);

    const rarity = getRarity(
      speciesRes.data.capture_rate,
      speciesRes.data.is_legendary,
      speciesRes.data.is_mythical,
    );

    this.setState({
      moves: pokeRes.data.moves.slice(0, 4),
      rarity,
    });
  }

  render() {
    const { route } = this.props;
    const { pokemon } = route.params;
    const { moves, rarity } = this.state;

    return (
      <Container>
        <Header>
          <PokemonImageDetail source={{ uri: pokemon.sprite }} />
          <PokemonNameDetail>{pokemon.name}</PokemonNameDetail>
          <PokemonInfoDetail>{pokemon.types}</PokemonInfoDetail>
          <PokemonInfoDetail>{rarity}</PokemonInfoDetail>
        </Header>

        <Moves
          showsVerticalScrollIndicator={false}
          data={moves}
          keyExtractor={(move) => move.move.name}
          renderItem={({ item, index }) => (
            <MoveItem>
              <MoveSlot>
                <MoveSlotText>{index + 1}</MoveSlotText>
              </MoveSlot>
              <MoveInfo>
                <MoveName>{item.move.name.replace(/-/g, " ").toUpperCase()}</MoveName>
                <MoveType>MOVE</MoveType>
              </MoveInfo>
            </MoveItem>
          )}
        />
      </Container>
    );
  }
}
