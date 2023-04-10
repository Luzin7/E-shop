import styled from 'styled-components';

const SideNavBar = styled.div`
  background-color: white;
  width: 21vw;
  height: 100vh;
  position: fixed;
  right: 0%;
  top: 0;
  z-index: 999;
  color: black;
`;

const SideNavBarHeader = styled.div`
  background-color: #ffdeb4;
  height: 10vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const SideNavBarCloseButton = styled.button`
  border: none;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: right;
  background: none;
  cursor: pointer;
  width: 50px;
`;

const SideNavBarProductsWrapper = styled.ul`
  height: 100vh;
  overflow-y: scroll;
`;

const Product = styled.li`
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
  }
`;

export {
	SideNavBar,
	SideNavBarHeader,
	SideNavBarCloseButton,
	SideNavBarProductsWrapper,
	Product,
	ProductImage,
};
