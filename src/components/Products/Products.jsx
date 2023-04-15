import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { CartContext } from '../../contexts/CartContext';
import {
	EmptySearchBackground,
	EmptySearchResultsBackground,
	ProductContent,
	ProductFreeShippingWrapper,
	ProductImage,
	ProductWrapper,
	ProductsWrapper,
	ProductPrice,
} from './Products.style';
import Cart from '../Cart/Cart';
import { MdLocalShipping } from 'react-icons/md';

export default function Products() {
	const { resultsBySearch } = useContext(SearchContext);
	const { addProductToCart, isSideNavBarActive } = useContext(CartContext);

	return (
		<>
			{isSideNavBarActive ? <Cart /> : null}
			{resultsBySearch ? (
				resultsBySearch.length > 0 ? (
					<ProductsWrapper>
						{resultsBySearch.map((product) => (
							<ProductWrapper key={product.id}>
								<ProductContent>
									<ProductImage>
										<img src={product.thumbnail} alt={product.title} />
										{product.shipping.free_shipping ? (
											<ProductFreeShippingWrapper>
												<MdLocalShipping className="free__shipping__icon" />
												<span className="free__shipping__text">
													Frete grátis
												</span>
											</ProductFreeShippingWrapper>
										) : null}
									</ProductImage>
									<span className="product__original-price">
										{product.original_price
											? `R$${product.original_price}`
											: null}
									</span>
									<ProductPrice>R${product.price}</ProductPrice>
									<p key={product.id}>{product.title}</p>
									<button
										type="button"
										onClick={() =>
											addProductToCart(
												product.id,
												product.thumbnail,
												product.price,
												product.shipping.free_shipping
											)
										}
									>
										Adicionar ao carrinho
									</button>
								</ProductContent>
							</ProductWrapper>
						))}
					</ProductsWrapper>
				) : (
					<>
						<EmptySearchResultsBackground alt="Imagem de storyset no Freepik"></EmptySearchResultsBackground>
						<h1>Desculpe, não conseguimos encontrar o que você procura.</h1>
					</>
				)
			) : (
				<EmptySearchBackground alt="Imagem de storyset no Freepik"></EmptySearchBackground>
			)}
		</>
	);
}
