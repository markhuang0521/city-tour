import React, { Component } from "react";

export default class TourItem extends Component {
	state = {
		toggle: false
	};
	toggleInfo = () => {
		this.setState({
			toggle: !this.state.toggle
		});
		// console.log(this.state.toggle);
	};

	render() {
		const { img, name, info, city, id } = this.props.tour;
		const removeTour = this.props.removeTour;
		return (
			<article className="tour-item">
				<div className="img-container">
					<img src={img} width="200" alt="city" />
					<span
						onClick={() => {
							removeTour(id);
						}}
						className="close-btn"
					>
						<i className="fas fa-window-close" />
					</span>
				</div>
				<div className="city-info">
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h4>
						Info{""}
						<span onClick={this.toggleInfo}>
							<i className="fas fa-caret-square-down" />
						</span>
					</h4>
					{this.state.toggle && <p>{info}</p>}
				</div>
			</article>
		);
	}
}
