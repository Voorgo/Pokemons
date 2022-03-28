import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Home from "./Home";
import Pokemons from "./Pokemons/Pokemons";
import About from "./About";
import PokemonInfo from "./Pokemon/PokemonInfo";

const MainWrapper = styled.main`
  margin-top: 30px;
  padding: 0 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
`;
const RouteSwitch = () => {
  return (
    <>
      <Nav />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemons/:name" element={<PokemonInfo />} />
        </Routes>
      </MainWrapper>
    </>
  );
};

export default RouteSwitch;
