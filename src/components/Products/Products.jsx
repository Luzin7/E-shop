import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import {
	EmptySearchBackground,
	ProductContent,
	ProductFreeShippingWrapper,
	ProductImage,
	ProductWrapper,
	ProductsWrapper,
} from './Products.style';
import { MdLocalShipping } from 'react-icons/md';

export default function Products() {
	const { search } = useContext(SearchContext);

	return (
		<>
			{search ? (
				<ProductsWrapper className="eita">
					{search.map((item) => (
						<ProductWrapper key={item.id}>
							<ProductContent>
								<ProductImage>
									<img src={item.thumbnail} alt={item.title} />
									{item.shipping.free_shipping ? (
										<ProductFreeShippingWrapper>
											<MdLocalShipping className="free__shipping__icon" />
											<span className="free__shipping__text">Frete grátis</span>
										</ProductFreeShippingWrapper>
									) : null}
								</ProductImage>
								<span className="product__original-price">
									{item.original_price ? `R$${item.original_price}` : null}
								</span>
								<span className="product__price">R${item.price}</span>
								<p key={item.id}>{item.title}</p>
							</ProductContent>
						</ProductWrapper>
					))}
				</ProductsWrapper>
			) : (
				<EmptySearchBackground alt="Imagem de storyset no Freepik"></EmptySearchBackground>
			)}
		</>
	);
}
