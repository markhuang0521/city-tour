import React, { Component } from "react";
import NarBar from "./components/NavBar";
import TourList from "./components/TourList";

class App extends Component {
	render() {
		return (
			<div>
				<NarBar />
				<TourList />
			</div>
		);
	}
}

export default App;
