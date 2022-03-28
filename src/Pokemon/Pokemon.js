import styled from "styled-components";
import { Link } from "react-router-dom";

const PokemonWrapper = styled(Link)`
  font-size: 2rem;
  color: white;
  text-transform: capitalize;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    transform: scaleX(0);
    background: rgb(176, 26, 77);
    transition: transform 200ms ease-out;
    transform-origin: bottom right;
  }

  &:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

const Pokemon = ({ pokemon }) => {
  return (
    <PokemonWrapper to={`/pokemons/${pokemon.name}`}>
      {pokemon.name}
    </PokemonWrapper>
  );
};

export default Pokemon;
