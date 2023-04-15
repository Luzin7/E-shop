import { React, createContext, useState } from 'react';
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
	const [resultsBySearch, setResultsBySearch] = useState('');

	return (
		<SearchContext.Provider value={{ resultsBySearch, setResultsBySearch }}>
			{children}
		</SearchContext.Provider>
	);
};
