import styled from "styled-components";
import PokemonType from "./PokemonType";
import PokemonData from "./PokemonData";

const CardInfo = styled.div`
  background: linear-gradient(
    143deg,
    rgba(198, 120, 30, 1) 0%,
    rgba(152, 0, 217, 1) 85%
  );
  width: 400px;
  position: relative;
  height: 600px;
  border-radius: 6px;
  border: 8px solid orange;
  grid-area: 2/6 / end/12;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const PokemonImgWrapper = styled.div`
  grid-area: 2/7 / 5 / 11;
  width: 15rem;
  height: 15rem;
  transform: scale(0);
  justify-self: center;
  align-self: center;
  opacity: 0;
  transition: all 200ms 400ms ease-in;
  margin-top: 1.5rem;
`;

const PokemonCard = ({
  pokeball,
  showPokemon,
  show,
  appear,
  pokemon,
  loading,
}) => {
  return (
    <>
      <CardInfo>
        <PokemonType pokemon={pokemon} isLoading={loading} />
        <PokemonData pokemonInfo={pokemon} loading={loading} />
      </CardInfo>
      <img
        src={
          show
            ? require("../img/pokeball-2.png")
            : require("../img/pokeball-1.png")
        }
        className={`pokemon-2 ${pokeball}`}
        alt="pokeBall"
        onClick={showPokemon}
        css={`
          margin-top: 1.5rem;
        `}
      />
      <PokemonImgWrapper className={`${appear}`}>
        <img
          src={pokemon?.sprites.front_default}
          className={`pokemon`}
          alt="pokemon"
        />
      </PokemonImgWrapper>
    </>
  );
};

export default PokemonCard;
