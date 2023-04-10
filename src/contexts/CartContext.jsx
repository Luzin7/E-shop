import { React, createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [productsCart, setProductsCart] = useState([]);
	const [isSideNavBarActive, setIsSideNavBarActive] = useState(false);

	const addProductToCart = (id, img, price) => {
		const copyProductsCart = [...productsCart];

		const product = copyProductsCart.find((product) => product.id === id);

		if (!product) {
			copyProductsCart.push({ id: id, img: img, price: price, qtd: 1 });
		} else {
			product.qtd = product.qtd + 1;
		}

		setProductsCart(copyProductsCart);
	};

	// const removeProductToCar = (id) => {};

	return (
		<CartContext.Provider
			value={{ productsCart, setProductsCart, addProductToCart, isSideNavBarActive, setIsSideNavBarActive }}
		>
			{children}
		</CartContext.Provider>
	);
};
