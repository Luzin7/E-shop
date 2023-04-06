import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { HeaderWrapper, HeaderBar } from '../Header/Header.style';
import CartButton from './../CartButton/CartButton';

export default function Header() {
	return (
		<HeaderBar>
			<HeaderWrapper>
				<SearchBar />
				<CartButton />
			</HeaderWrapper>
		</HeaderBar>
	);
}
