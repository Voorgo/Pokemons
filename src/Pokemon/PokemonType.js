import styled from "styled-components";
import "styled-components/macro";
import ClipLoader from "react-spinners/ClipLoader";

const PokemonImg = styled.img`
  width: 3rem;
  z-index: 2;
  position: relative;
  cursor: pointer;
`;

const ToolTip = styled.div`
  line-height: 0;
  position: relative;

  span {
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    text-transform: capitalize;
    background-color: red;
    visibility: hidden;
    background: rgba(20, 20, 20, 0.9);
    text-align: center;
    padding: 12px 6px;
    border-radius: 6px;
    z-index: 2000;
  }

  &:hover {
    span {
      visibility: visible;
    }
  }
`;

const PokemonType = ({ pokemon, isLoading }) => {
  return (
    <TypeWrapper>
      {isLoading ? (
        <ClipLoader size={38} loading={isLoading} color="orange" />
      ) : (
        <>
          <ToolTip>
            <PokemonImg
              src={require(`../img/${pokemon.types[0].type.name}.png`)}
            />
            <span>{pokemon.types[0].type.name}</span>
          </ToolTip>

          {pokemon.types.length > 1 ? (
            <ToolTip>
              <PokemonImg
                src={require(`../img/${pokemon.types[1].type.name}.png`)}
              />
              <span>{pokemon.types[1].type.name}</span>
            </ToolTip>
          ) : null}
        </>
      )}
    </TypeWrapper>
  );
};

const TypeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 1rem;
`;

export default PokemonType;
