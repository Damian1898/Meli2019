const API_ITEMS = 'http://localhost:3000/api/items';
const URL_MELI = 'https://api.mercadolibre.com/sites/MLA/search';

export function objToQueryString(obj) {
	const keyValuePairs = [];
	for (const key in obj) {
		keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	}
	return keyValuePairs.join('&');
}

export function searchItems({ query }) {

	const queryString = objToQueryString({
		q: query,
	});
	const response = fetch(`${API_ITEMS}?${queryString}`, {
	    method: "GET"
	}).then(response => response.json());
	return response;
}

export function searchItem({ id }) {
	const response = fetch(`${API_ITEMS}/${id}`, {
	    method: "GET"
	}).then(response => response.json());
	return response;
}
