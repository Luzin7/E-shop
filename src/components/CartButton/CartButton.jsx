import {React, useContext} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShoppingButton, ShoppingButtonStatus } from './CartButton.style';
import { CartContext } from '../../contexts/CartContext';


export default function CartButton() {
	const { productsCart, isSideNavBarActive,  setIsSideNavBarActive } = useContext(CartContext);

	
	const totalProductsCount = productsCart.length;
	
	return (
		<ShoppingButton onClick={() => setIsSideNavBarActive(!isSideNavBarActive)}>
			<AiOutlineShoppingCart />
			{totalProductsCount > 0 ? <ShoppingButtonStatus>{totalProductsCount}</ShoppingButtonStatus> : null}
		</ShoppingButton>
	);
}
