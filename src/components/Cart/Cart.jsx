import {React, useContext} from 'react';
import {SideNavBar, SideNavBarHeader, SideNavBarCloseButton, SideNavBarProductsWrapper, Product, ProductImage } from './Cart.style';
import { CartContext } from '../../contexts/CartContext';
import { AiOutlineClose } from 'react-icons/ai';
import { ProductPrice } from '../Products/Products.style';


export default function Cart() {
	const { productsCart, isSideNavBarActive, setIsSideNavBarActive } = useContext(CartContext);

	const totalProductsCount = productsCart.length;

	const showQtdToUser = () => {
		if(totalProductsCount === 0) {
			return 'Seu carrinho está vazio';
		} else if(totalProductsCount === 1) {
			return 'Você tem apenas um item no carrinho';
		} else {
			return `Você tem ${totalProductsCount} itens no carrinho`;
		}
	};
	return (
		<>
			<SideNavBar>
				<SideNavBarHeader>
					<SideNavBarCloseButton onClick={() => setIsSideNavBarActive(!isSideNavBarActive)} >
						<AiOutlineClose />
					</SideNavBarCloseButton>
					<span>{showQtdToUser()}</span>
				</SideNavBarHeader>
				<SideNavBarProductsWrapper>
					{productsCart.map((product) => (
						<Product key={product.id}>
							<ProductImage>
								<img src={product.img} alt={product.id} />
							</ProductImage>
							<span>Qtd: {product.qtd}</span>
							<ProductPrice>{`R$${product.price}`}</ProductPrice>
						</Product>
					))}
				</SideNavBarProductsWrapper>
			</SideNavBar>
		</>
	);
}
