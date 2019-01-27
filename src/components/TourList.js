import React, { Component } from "react";
import TourItem from "./TourItem";
import { tourData } from "../resources/tourData";

export default class TourList extends Component {
	state = {
		tours: tourData
	};
	removeTour = id => {
		console.log(id);

		const { tours } = this.state;
		const sortedTours = tours.filter(tour => tour.id !== id);
		this.setState({
			tours: sortedTours
		});
	};
	render() {
		const tours = this.state.tours;

		return (
			<section className="tour-list">
				{tours.map(tour => (
					<TourItem key={tour.id} tour={tour} removeTour={this.removeTour} />
				))}
			</section>
		);
	}
}
