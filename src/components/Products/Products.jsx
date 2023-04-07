import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import EmptySearchBackground from './Products.style';

export default function Products() {
	const { search } = useContext(SearchContext);

	return (
		<>
			{search ? (
				<>
					{search.map((item) => (
						<div key={item.id}>
							<h1 key={item.id}>{item.title}</h1>
							<img src={item.thumbnail} alt={item.title} />
							<span>R${item.price}</span>
						</div>
					))}
				</>
			) : (
				<EmptySearchBackground></EmptySearchBackground>
			)}
		</>
	);
}
