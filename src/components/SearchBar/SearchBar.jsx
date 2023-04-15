import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { InputBar, ButtonSearch, SearchBarWrapper } from './SearchBar.style';
import getResultsByQuery from '../../services/api';
import { SearchContext } from '../../contexts/SearchContext';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');

	const { setResultsBySearch } = useContext(SearchContext);

	const handleSearchInput = (target) => {
		setSearchInput(target);
	};

	const searchUserQuery = () => {
		if (searchInput) {
			getResultsByQuery(searchInput).then((queryOfUser) => {
				setResultsBySearch(queryOfUser);
			});
		}
	};

	return (
		<SearchBarWrapper
			role="form"
			onSubmit={(e) => {
				e.preventDefault();
				searchUserQuery();
			}}
		>
			<InputBar
				value={searchInput}
				type="text"
				placeholder="Pesquise produtos, marcas..."
				onInput={({ target }) => handleSearchInput(target.value)}
			/>
			<ButtonSearch
				type="button"
				onClick={() => {
					searchUserQuery();
				}}
			>
				<BsSearch />
			</ButtonSearch>
		</SearchBarWrapper>
	);
}
