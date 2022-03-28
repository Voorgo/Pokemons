import styled from "styled-components";

const FormWrapper = styled.form``;
const InputWrapper = styled.input.attrs({ type: "text" })`
  outline: none;
  padding: 5px;
  border: none;
  width: 15rem;
  height: 2rem;
  box-sizing: border-box;
  border-radius: 2px;
  &:focus {
    outline: 2px solid rgb(176, 26, 77);
  }

  &::placeholder {
    color: black;
  }
`;

const SearchPokemon = ({ changeValue }) => {
  return (
    <FormWrapper onSubmit={(e) => e.preventDefault()}>
      <InputWrapper placeholder="Search Pokemon" onChange={changeValue} />
    </FormWrapper>
  );
};

export default SearchPokemon;
