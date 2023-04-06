import axios from 'axios';

const getResultsByQuery = (query) => {

	const data = axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
		.then((res) => res.data.results);
	
	return console.log(data);
};

export default getResultsByQuery;
