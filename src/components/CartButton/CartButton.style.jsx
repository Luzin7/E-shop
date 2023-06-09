import styled from 'styled-components';

const ShoppingButton = styled.button`
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 10px;
  border: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: black;

  @media screen and (max-width: 412px){
    font-size: 2.7em;
    position: fixed;
    top: 80vh;
    right: 10vw;
    background: #b2a4ff;
    border-radius: 100%;
    z-index: 1000;
    color: white;
  }
`;

const ShoppingButtonStatus = styled.span`
  background-color: #ffb4b4;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 0.5em;
  font-weight: 600;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ShoppingButton, ShoppingButtonStatus };
