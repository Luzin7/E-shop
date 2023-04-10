import styled from 'styled-components';

import DiscountBG from '../../assets/imgs/Discount-cuate.png';
import NoResultsBG from '../../assets/imgs/Broken-light-bulb-cuate.png';

const EmptySearchBackground = styled.div`
  background-image: url(${DiscountBG});
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const EmptySearchResultsBackground = styled.div`
  background-image: url(${NoResultsBG});
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: stretch;
  max-width: 1100px;
  margin: 0 auto;
  animation: showProducts 0.5s ease-in-out;

  @keyframes showProducts {
  from {opacity: 0;}
  to {opacity: 1;}
}
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: white;
  max-width: 250px;
  max-height: 400px;
  width: 100%;
  border-radius: 10px;
  margin: 20px 0px;
  padding-top: 10px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
`;

const ProductContent = styled.div`
  color: gray;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    text-align: center;
    margin: 10px;
  }

  .product__price {
    color: black;
    font-weight: 500;
    font-size: 2em;
  }

  .product__original-price {
    text-decoration: line-through;
    margin-top: 10px;
    opacity: 0.7;
  }
`;

const ProductFreeShippingWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 10px;
  background-color: #b2a4ff;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  .free__shipping__icon {
    font-size: 1.5em;
    color: white;
  }

  .free__shipping__text {
    font-size: 0.5em;
    color: white;
  }
`;

const ProductImage = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: auto;
    height: 100%;
  }
`;

const ProductPrice = styled.span`
    color: black;
    font-weight: 500;
    font-size: 2em;
`;

export {
	EmptySearchBackground,
	EmptySearchResultsBackground,
	ProductsWrapper,
	ProductWrapper,
	ProductContent,
	ProductImage,
	ProductFreeShippingWrapper,
	ProductPrice,
};
