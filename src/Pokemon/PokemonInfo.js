import styled from "styled-components";
import { useParams } from "react-router-dom";
import "styled-components/macro";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonInfo = () => {
  const params = useParams();
  const [active, setActive] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [show, setShow] = useState(false);
  const [pokeball, setPokeball] = useState("");
  const [appear, setAppear] = useState("");
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setActive(true);
  };
  const fetchData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await res.json();
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  const showPokemon = () => {
    setShow(!show);
    setPokeball("disappear");
    setAppear("appear");
  };

  return (
    <PokemonInfoWrapper>
      <TitpleWrapper>
        <img
          src={require("../img/pokeBall.png")}
          width="50"
          height="50"
          alt="pokeBall"
          className={active ? "active" : ""}
          onClick={handleClick}
        />
        <h2 className="title">{params.name}</h2>
      </TitpleWrapper>
      <PokemonCard
        appear={appear}
        show={show}
        pokemon={pokemon}
        showPokemon={showPokemon}
        pokeball={pokeball}
        loading={loading}
      />
    </PokemonInfoWrapper>
  );
};

const PokemonInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  grid-template-rows: repeat(6, 1fr);

  img {
    user-select: none;
  }
`;
const TitpleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  grid-area: 1/8/2/10;
  align-self: start;
  margin-top: 2rem;
  justify-self: center;

  img {
    transition: transform 200ms ease-out;
    cursor: pointer;
  }

  img:hover {
    transform: rotate(180deg)
  }

  }
`;

export default PokemonInfo;
