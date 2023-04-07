import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { InputBar, ButtonSearch, SearchBarWrapper } from './SearchBar.style';
import getResultsByQuery from '../../services/api';
import { SearchContext } from '../../contexts/SearchContext';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');

	const delayToCallApi = useRef(null);

	const { setSearch } = useContext(SearchContext);

	const handleSearchInput = (target) => {
		setSearchInput(target);
	};

	useEffect(() => {
		if (searchInput) {
			if (delayToCallApi.current) clearInterval(delayToCallApi.current);

			delayToCallApi.current = setTimeout(() => {
				getResultsByQuery(searchInput).then((res) => {
					setSearch(res);
				});
			}, 1000);

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
