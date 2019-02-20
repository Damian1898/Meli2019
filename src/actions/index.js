export const searchItems = (data) => {
	return { type: 'SEARCH_ITEMS', query: data.query }
}

export const searchItemsReceived = (data) => {
	return { type: 'SEARCH_ITEMS_RECEIVED', items: data.items }
}

export const searchItem = (data) => {
	return { type: 'SEARCH_ITEM', id: data.id }
}

export const searchItemReceived = (data) => {
	return { type: 'SEARCH_ITEM_RECEIVED', itemSelect: data.itemSelect }
}