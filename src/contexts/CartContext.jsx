import { React, createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [productsCart, setProductsCart] = useState([]);
	const [isSideNavBarActive, setIsSideNavBarActive] = useState(false);

	const addProductToCart = (id, img, price, free_shipping) => {
		const copyProductsCart = [...productsCart];

		const product = copyProductsCart.find((product) => product.id === id);

		if (!product) {
			copyProductsCart.push({ id: id, img: img, price: price, free_shipping: free_shipping, qtd: 1 });
		} else {
			product.qtd = product.qtd + 1;
		}

		setProductsCart(copyProductsCart);
	};

	const removeProductToCar = (id) => {
		const copyProductsCart = [...productsCart];
		const product = copyProductsCart.find((product) => product.id === id);

		if (product && product.qtd > 1) {
			product.qtd = product.qtd - 1;
			setProductsCart(copyProductsCart);
		} else {
			const filteredProductsCart = copyProductsCart.filter(
				(product) => product.id !== id
			);
			setProductsCart(filteredProductsCart);
		}
	};

	const clearCart = () => setProductsCart([]);

	return (
		<CartContext.Provider
			value={{
				productsCart,
				setProductsCart,
				addProductToCart,
				removeProductToCar,
				isSideNavBarActive,
				setIsSideNavBarActive,
				clearCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
