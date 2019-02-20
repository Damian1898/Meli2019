// Reducer
const initialState = {
	query: null,
	loading: false,
	data: {
		items: []
	},
	itemSelected: {
		item: null
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_ITEMS':
			return {
				...state,
				loading: true,
				data: {
					items: []
				},
				query: action.query,
				itemSelected: {
					item: null
				}
			};
		case 'SEARCH_ITEMS_RECEIVED':
			return { ...state, data: action.items, loading: false }
		case 'SEARCH_ITEM':
			return {
				...state,
				loading: true,
				data: {
					items: []
				},
				id: action.id,
			};
		case 'SEARCH_ITEM_RECEIVED':
			return { ...state, itemSelected: action.itemSelected, loading: false }
		default:
			return state;
	}
};

export default reducer;
