import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { InputBar, ButtonSearch, SearchBarWrapper } from './SearchBar.style';
import getResultsByQuery from '../../services/api';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');
	const delayToCallApi = useRef(null);

	const handleSearchInput = (target) => {
		setSearchInput(target);
	};

	useEffect(() => {
		if (searchInput) {
			if (delayToCallApi.current) clearInterval(delayToCallApi.current);

			delayToCallApi.current = setTimeout(() => {
				getResultsByQuery(searchInput);
				console.log(getResultsByQuery(searchInput));
			}, 1500);
			
			return () => clearInterval(delayToCallApi.current);
		}
	}, [searchInput]);
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
