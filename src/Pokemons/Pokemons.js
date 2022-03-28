import styled from "styled-components";
import { useState, useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import SearchPokemon from "./SearchPokemon";
import BeatLoader from "react-spinners/BeatLoader";
import LoadButton from "./LoadButton";

const PokemonsWrapper = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
  align-items: center;
`;
const PokemonListWrapper = styled.ul`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.search}, 1fr)`};
  column-gap: 3rem;
  margin-top: 4rem;
  justify-content: center;
  row-gap: 1rem;
  margin: 4rem 0 auto;

  li {
    list-style: none;
  }
`;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(true);
  const [numOfPokemons, setNumOfPokemons] = useState(60);
  const [search, setSearch] = useState(5);
  const [visible, setVisible] = useState(true);

  const fetchPokemon = (numOfPokemons) => {
    const arr = [];
    for (let i = 1; i <= numOfPokemons; i++) {
      arr.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) =>
          res.json()
        )
      );
    }
    return arr;
  };

  useEffect(() => {
    Promise.all(fetchPokemon(numOfPokemons)).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, [numOfPokemons]);

  const handleChange = (e) => {
    setWord(e.target.value);
    if (e.target.value === "") {
      setSearch(5);
      setVisible(true);
    } else {
      setVisible(false);
      setSearch(1);
    }
  };

  const increseNumOfPokemons = () => {
    if (numOfPokemons > 260) return;
    setTimeout(
      setNumOfPokemons((prev) => prev + 20),
      200
    );
  };

  const pokemonsList = pokemons
    .filter((pokemon) => {
      if (word === "") return pokemon;
      else if (pokemon.name.startsWith(word)) return pokemon;
      return null;
    })
    .map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />);

  return (
    <PokemonsWrapper>
      <BeatLoader
        loading={loading}
        color="#b01a4d"
        css={`
          position: absolute;
          top: calc(80vh / 2);
        `}
        size={20}
      />
      <SearchPokemon changeValue={handleChange} />
      <PokemonListWrapper search={search}>
        {pokemonsList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </PokemonListWrapper>
      {loading ? null : (
        <LoadButton incresePokemons={increseNumOfPokemons} visible={visible} />
      )}
    </PokemonsWrapper>
  );
};

export default Pokemons;
