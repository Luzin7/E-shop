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
	max-width: 1200px;
	margin: 0 auto;
	animation: showProducts 0.5s ease-in-out;

	@keyframes showProducts {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (max-width: 412px) {
		flex-flow: row wrap;
		max-width: 412px;
	}
`;

const ProductWrapper = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	background-color: white;
	max-width: 250px;
	height: 500px;
	border-radius: 10px;
	margin: 20px 0px;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
	position: relative;
	padding-top: -20px;

	button {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40px;
		border: none;
		border-radius: 0px 0px 10px 10px;
		background-color: #b2a4ff;
		color: white;
		font-weight: bold;
		font-size: 12px;
		cursor: pointer;
		transition: all 0.2s;
	}

	button:hover {
		height: 80px;
		font-size: 14px;
	}

	button:active {
		background-color: #8f85c4;
	}

	@media screen and (max-width: 412px) {
		width: 150px;
		height: 400px;

		button:hover {
			height: 40px;
			font-size: 12px;
		}
	}
`;

const ProductContent = styled.div`
	color: gray;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	height: 100%;

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
	border-radius: 10px;
	background: black;
	width: 80px;
	height: 25px;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;

	.free__shipping__icon {
		color: #ffdeb4;
		font-size: 1.5em;
	}

	.free__shipping__text {
		color: #ffdeb4;
		font-size: 0.5em;
	}

	@media screen and (max-width: 412px) {
		width: 75px;
		height: 20px;
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

	@media screen and (max-width: 412px) {
		max-width: 150px;
		max-height: 150px;

		img {
			width: auto;
			height: 100%;
		}
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
