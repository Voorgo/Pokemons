import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = styled.nav`
  background: #1d1d33;
  color: orange;
  display: flex;
  justify-content: end;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  padding-right: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  user-drag: none;
  user-select: none;
  padding: 1rem;
  transition: 150ms ease-out;
  &:hover {
    color: #b01a4d !important;
    background: rgba(0, 0, 0, 0.7) !important;
  }
`;

const Nav = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  const links = (name, style) => {
    if (style === "color") {
      if (name === active) return "#b01a4d";
      else return "white";
    } else if (style === "background") {
      if (name === active) return "rgba(0, 0, 0, 0.7)";
      else return "none";
    }
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
  return (
    <NavBar>
      <NavLink
        to="/"
        style={{
          color: links("/", "color"),
          background: links("/", "background"),
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/pokemons"
        style={{
          color: links("/pokemons", "color"),
          background: links("/pokemons", "background"),
        }}
      >
        Pokemons
      </NavLink>
      <NavLink
        to="/about"
        style={{
          color: links("/about", "color"),
          background: links("/about", "background"),
        }}
      >
        About
      </NavLink>
    </NavBar>
  );
};

export default Nav;
