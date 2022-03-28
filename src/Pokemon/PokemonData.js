import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const PokemonData = ({ pokemonInfo, loading }) => {
  return (
    <PokemonDataWrapper>
      {loading ? (
        <ClipLoader size={38} loading={loading} color="orange" />
      ) : (
        <>
          <div className="size">
            <p>Weight: {pokemonInfo.weight / 10} kg</p>
            <span> &#124;</span>
            <p>Height: {pokemonInfo.height / 10} m</p>
          </div>
          <p className="abilities-text">
            1st Ability: {pokemonInfo.abilities[0].ability.name}
          </p>
          {pokemonInfo.abilities.length > 1 ? (
            <p className="abilities-text">
              2nd Ability: {pokemonInfo.abilities[1]?.ability.name}
            </p>
          ) : null}
        </>
      )}
    </PokemonDataWrapper>
  );
};

const PokemonDataWrapper = styled.div`
  width: 100%;
  height: 35%;
  background: white;
  border-radius: 7px;
  padding: 10px;
  color: black;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  .size {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
  }
`;

export default PokemonData;
