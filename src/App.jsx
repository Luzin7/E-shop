import { React } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { SearchContextProvider } from './contexts/SearchContext';
import { CartContextProvider } from './contexts/CartContext';

function App() {
	return (
		<>
			<SearchContextProvider>
				<CartContextProvider>
					<Header />
					<Products />
				</CartContextProvider>
			</SearchContextProvider>
		</>
	);
}

export default App;
