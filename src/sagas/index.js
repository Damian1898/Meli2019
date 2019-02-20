import { call, put,select, takeEvery, all } from 'redux-saga/effects';
import {
	searchItems,
	searchItem
} from '../api/items';

function* searchItemsSaga({ query }) {
	try {
		const items = yield call(searchItems, { query });
		yield put({ type: 'SEARCH_ITEMS_RECEIVED', items });
	} catch (error) {
		console.log(error);
	}
}

function* searchItemSaga({ id }) {
	try {
		const itemSelected = yield call(searchItem, { id });
		yield put({ type: 'SEARCH_ITEM_RECEIVED', itemSelected });
	} catch (error) {
		console.log(error);
	}
}

function* actionWatcher() {
	yield takeEvery('SEARCH_ITEMS', searchItemsSaga),
	yield takeEvery('SEARCH_ITEM', searchItemSaga)
}


export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}
