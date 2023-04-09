import { React, createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [productsCart, setProductsCart] = useState([]);

	const addProductToCart = (id) => {
		const copyProductsCart = [...productsCart];

		const product = copyProductsCart.find((product) => product.id === id);

		if(!product){
			copyProductsCart.push({id: id, qtd: 1});
		} else{
			product.qtd = product.qtd + 1;
		}

		setProductsCart(copyProductsCart);
	};

	// const removeProductToCar = (id) => {};

	return (
		<CartContext.Provider value={{ productsCart, setProductsCart, addProductToCart }}>
			{children}
		</CartContext.Provider>
	);
};
