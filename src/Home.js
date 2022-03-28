import styled from "styled-components";

const HomeDiv = styled.div`
  background: white;
  color: black;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const Home = () => {
  return <HomeDiv>Home Page</HomeDiv>;
};

export default Home;
