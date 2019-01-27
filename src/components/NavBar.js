import React from "react";
import Logo from "../resources/logo.png";

const NavBar = () => {
	return (
		<nav className="navBar">
			<img src={Logo} alt="logo" />
			<ul className="nav-links">
				<li>
					<a href="/" className="nav-link">
						Home
					</a>
				</li>
				<li>
					<a href="/" className="nav-link">
						About
					</a>
				</li>
				<li>
					<a href="/" className="nav-link active">
						Tours
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
