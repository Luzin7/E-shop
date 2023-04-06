import styled from 'styled-components';

const SearchBarWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  max-width: 500px;
  border-radius: 7px 7px 7px 7px;
`;

const InputBar = styled.input`
  padding: 12px;
  flex-grow: 1;
  border-radius: 7px 0px 0px 7px;
  outline: none;
  border: none;
  font-size: 1.1em;
  border-right: 1px solid #ddd;
`;

const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  font-size: 1.5em;
  padding: 0 7px;
  cursor: pointer;
`;

export { InputBar, ButtonSearch, SearchBarWrapper };
