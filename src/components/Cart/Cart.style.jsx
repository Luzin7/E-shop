import styled from 'styled-components';

const SideNavBar = styled.div`
	background-color: white;
	width: 15vw;
	height: 100vh;
	position: fixed;
	right: 0%;
	top: 0;
	z-index: 999;
	color: black;

	@media screen and (max-width: 412px) {
		width: 100vw;
	}
`;

const SideNavBarHeader = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const AlertAboutProducts = styled.p`
	text-align: center;
	padding: 0 12px;
	font-size: 12px;

	@media screen and (max-width: 412px) {
		padding: 0 25px;
	}
`;

const SideNavBarProductsWrapper = styled.ul`
	padding: 20px 0;
	height: 90vh;
	overflow-y: scroll;
`;

const Product = styled.li`
	list-style: none;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	 
	 &:last-child{
		margin-bottom: 60px;
	 }
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

	@media screen and (max-width: 412px) {
		margin-top: 20px;
	}
`;

const QuantityOfProduct = styled.div`
	padding: 7px 0;
	width: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 412px) {
		margin: 7px 0;
		width: 200px;
		.btn-icon {
			font-size: 28px;
		}
	}
`;

const TotalPriceLabel = styled.span`
	margin-top: 12px;
	font-size: 14px;
	color: black;

	@media screen and (max-width: 412px) {
		font-size: 18px;
	}
`;

const TotalPriceValue = styled.span`
	font-size: 18px;
	font-weight: bold;
	color: #b2a4ff;

	@media screen and (max-width: 412px) {
		font-size: 24px;
	}
`;

const ClearCartBtn = styled.button`
	margin: 8px 0px 12px 0px;
	padding: 2px 8px;
	border-radius: 7px;

	&:hover {
		background-color: #dbdbdb;
	}

	@media screen and (max-width: 412px) {
		padding: 14px 16px;
	}
`;

export {
	SideNavBar,
	SideNavBarHeader,
	SideNavBarProductsWrapper,
	Product,
	ProductImage,
	QuantityOfProduct,
	TotalPriceLabel,
	TotalPriceValue,
	AlertAboutProducts,
	ClearCartBtn,
};
