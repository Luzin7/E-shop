import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  
  @media screen and (max-width: 412px){
    h1{
      display: none;
    }
  position: relative;
  }
`;

const HeaderBar = styled.header`
  background-color: #ffdeb4;
  width: 100%;
`;

export { HeaderWrapper, HeaderBar };
