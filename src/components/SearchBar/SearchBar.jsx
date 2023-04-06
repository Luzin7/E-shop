import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { InputBar, ButtonSearch, SearchBarWrapper } from './SearchBar.style';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');

	const handleSearchInput = (target) => {
		setSearchInput(target);
	};
	return (
		<SearchBarWrapper>
			<InputBar
				value={searchInput}
				type="search"
				placeholder="Pesquise o produto..."
				onInput={({ target }) => handleSearchInput(target.value)}
				required
			/>
			<ButtonSearch type="button">
				<BsSearch />
			</ButtonSearch>
		</SearchBarWrapper>
	);
}
