import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import TileContainer from "./TileContainer";

import hogs from "../porkers_data";

function App() {
	const [filter, setFilter] = useState('-');
	const [showOnlyGreased, setShowOnlyGreased] = useState(false);
	let greaseFilteredHogs;
	let visibleHogs;
	

	console.log(hogs);
	console.log(filter);
	console.log(showOnlyGreased);

	if (showOnlyGreased) {
		greaseFilteredHogs = hogs.filter(hog => hog.greased === true);
	} else {
		greaseFilteredHogs = [...hogs]
	}

	
	if (filter === "name") {
		visibleHogs = [...greaseFilteredHogs].sort( (a, b) => a.name > b.name ? 1 : -1);
	} else if (filter === "weight") {
		visibleHogs = [...greaseFilteredHogs].sort( (a, b) => a.weight > b.weight ? 1 : -1);
	} else {
		visibleHogs = [...greaseFilteredHogs];
	}
	
	



	return (
		<div className="App">
			<Nav />
			<Filter setFilter={setFilter} setShowOnlyGreased={setShowOnlyGreased} showOnlyGreased={showOnlyGreased} />
			<TileContainer hogs={visibleHogs}/>
		</div>
	);
}

export default App;
