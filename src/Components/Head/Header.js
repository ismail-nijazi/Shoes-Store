import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../../Styles/Header.scss";

const Header = () => {
	return (
		<header>
			<Navbar />
			<div className="header-row-2">
				<h1>Nunc id eleifend euismod</h1>
				<p>
					Amet eros elementum faucibus. Vestibulum ante ipsum primis
					in faucibus orci
				</p>
				<Link to="/"><span>More info</span></Link>
			</div>
		</header>
	);
};

export default Header;
