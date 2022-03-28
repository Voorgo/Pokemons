import styled from "styled-components";
import { useState } from "react";

const LoadButton = ({ incresePokemons, visible }) => {
  const [disabled, setDisabled] = useState(false);

  const isDisabled = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 300);
  };
  return (
    <Btn
      onClick={() => {
        isDisabled();
        incresePokemons();
      }}
      visible={visible}
      disabled={disabled}
    >
      Load More
    </Btn>
  );
};

const Btn = styled.button`
  margin-top: 2rem;
  display: ${(props) => (props.visible ? "initial" : "none")};
  border: 2px solid rgb(176, 26, 77);
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background: #0c0c14;
  color: white;
  cursor: pointer;
  transition: transform 100ms ease-in;

  &:active {
    transform: scale(0.95);
  }
  &:hover {
    border: 2px solid orange;
    box-shadow: 0 0 2px orange;
  }
`;

export default LoadButton;
