import styled from "styled-components";

const AboutContainer = styled.div`
  font-size: 4rem;
`;

const About = () => {
  return (
    <AboutContainer>
      This is an app that fetch pokemons and give information about each
      pokemon.
    </AboutContainer>
  );
};

export default About;
