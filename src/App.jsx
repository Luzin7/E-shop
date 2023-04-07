import { React } from 'react';
import Header from './components/header/Header';
import Products from './components/Products/Products';
import { SearchContextProvider } from './contexts/SearchContext';

function App() {

	return (
		<>
			<SearchContextProvider>
				<Header />
				<Products />
			</SearchContextProvider>
		</>
	);
}

export default App;
