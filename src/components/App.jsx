import React from 'react';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList'
import Loading from '../components/Loading'
import ItemSelect from '../components/ItemSelect';
import { LIGTH_GREY } from '../constants/colors';

let App = () => (
	<div
		style={{backgroundColor: LIGTH_GREY}}
	>
		<SearchBox />
		<Loading />
		<SearchList />
		<ItemSelect />
	</div>
);


export default App;
