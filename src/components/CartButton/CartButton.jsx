import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShoppingButton, ShoppingButtonStatus } from './CartButton.style';

export default function CartButton() {
	return (
		<ShoppingButton>
			<AiOutlineShoppingCart />
			<ShoppingButtonStatus>7</ShoppingButtonStatus>
		</ShoppingButton>
	);
}
