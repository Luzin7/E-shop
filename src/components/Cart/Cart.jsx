import { React, useContext } from 'react';
import {
	MdOutlineRemoveCircleOutline,
	MdOutlineAddCircleOutline,
} from 'react-icons/md';
import { CartContext } from '../../contexts/CartContext';
import { ProductPrice } from '../Products/Products.style';
import {
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
} from './Cart.style';

export default function Cart() {
	const { productsCart, addProductToCart, removeProductToCar, clearCart } =
		useContext(CartContext);

	const showTotalPrice = () => {
		const prices = [];
		for (let i = 0; i < productsCart.length; i++) {
			prices.push(productsCart[i].price * productsCart[i].qtd);
		}

		return parseFloat(prices.reduce((acc, cur) => acc + cur, 0).toFixed(2));
	};

	const showQtdOfFreeShipping = () => {
		let freeShippingCount = 0;
		for (let i = 0; i < productsCart.length; i++) {
			productsCart[i].free_shipping
				? (freeShippingCount = freeShippingCount + 1)
				: null;
		}

		if (freeShippingCount === 1) {
			return (
				<>
					Seja bem vindo(a) ao E-shop. Um dos seus pedidos possui{' '}
					<b>frete GRÁTIS</b>, que ótimo!
				</>
			);
		} else if (freeShippingCount > 1) {
			return (
				<>
					Seja bem vindo(a) ao E-shop. Você possui {freeShippingCount} produtos
					com <b>frete GRÁTIS</b>, que ótimo!
				</>
			);
		} else
			return 'Seja bem vindo(a) ao E-shop. Aproveite nossos produtos e boas compras!';
	};

	return (
		<>
			<SideNavBar className="open">
				<SideNavBarHeader>
					<TotalPriceLabel>Subtotal</TotalPriceLabel>
					<TotalPriceValue>{`R$${showTotalPrice()}`}</TotalPriceValue>
					<AlertAboutProducts>{showQtdOfFreeShipping()}</AlertAboutProducts>
					<ClearCartBtn
						className="btn"
						type="button"
						onClick={() => clearCart()}
					>
						Limpar carrinho
					</ClearCartBtn>
				</SideNavBarHeader>
				<SideNavBarProductsWrapper>
					{productsCart.map((product) => (
						<Product key={product.id}>
							<ProductImage>
								<img src={product.img} alt={product.id} />
							</ProductImage>
							<QuantityOfProduct>
								<MdOutlineAddCircleOutline
									onClick={() => addProductToCart(product.id)}
									className="btn-icon"
								/>
								<span>{`Qtd: ${product.qtd}`}</span>
								<MdOutlineRemoveCircleOutline
									onClick={() => removeProductToCar(product.id)}
									className="btn-icon"
								/>
							</QuantityOfProduct>
							<ProductPrice>{`R$${product.price}`}</ProductPrice>
						</Product>
					))}
				</SideNavBarProductsWrapper>
			</SideNavBar>
		</>
	);
}
