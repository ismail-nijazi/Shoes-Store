import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navbarActions, shoppingCartActions } from "../../redux/store";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.scss";

const Navbar = () => {
	const shopingCartProducts = useSelector(
		(state) => state.cartProducts.cartProducts
	);
	const navbarVisibility = useSelector(
		(state) => state.navbarVisibility.visibility
	);
	const shoppingCartVisibility = useSelector(
		(state) => state.cartVisibility.visibility
	);

	const dispatch = useDispatch();
	const navbar = useRef();
	const [nav, setNav] = useState(navbar);
	useEffect(() => {
		setNav(navbar);
		if (nav.current !== null) {
			let timer = 0;
			window.addEventListener(
				"scroll",
				() => {
					if (window.innerWidth > 1024 && nav.current !== null) {
						nav.current.style.opacity = 0;
						if (timer !== null) {
							clearTimeout(timer);
						}
						timer = setTimeout(() => {
							nav.current.style.opacity = 1;
						}, 200);
					}
				},
				false
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const showAndHideNavbar = () => {
		if (navbarVisibility) {
			dispatch(navbarActions.hide());
			dispatch(shoppingCartActions.show());
		} else {
			dispatch(navbarActions.show());
		}
	};

	const showShoppinCart = () => {
		if (shoppingCartVisibility) {
			dispatch(shoppingCartActions.hide());
			dispatch(navbarActions.show());
		} else {
			dispatch(shoppingCartActions.show());
		}
	};

	const getCountOfAllProducts = () => {
		let total = 0;
		shopingCartProducts.forEach((item) => {
			total += item.count;
		});
		return total;
	};

	return (
		<nav ref={navbar}>
			<button className="navButton" onClick={showAndHideNavbar}>
				<span className="iconify" data-icon="ei:navicon"></span>
			</button>
			<div className="logo">
				<a href="/#">LOGO</a>
			</div>
			<div
				className={navbarVisibility ? "cover" : "cover showCover"}
			></div>
			<ul className={navbarVisibility ? "" : "showNavLinks"}>
				<li className="nav-link">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-link">
					<Link to="/shoes">Men</Link>
				</li>
				<li className="nav-link">
					<Link to="/shoes">Women</Link>
				</li>
				<li className="nav-link">
					<Link to="/shoes">Sales</Link>
				</li>
				<li className="nav-link">
					<Link to="/about">About</Link>
				</li>
			</ul>
			<div className="navRightSide">
				<button onClick={showShoppinCart}>
					<span
						id="showShoppinCartIcon"
						className="iconify"
						data-icon="bi:bag"
					></span>
					<span id="count-products-cart">
						{shopingCartProducts.length === 0
							? ""
							: getCountOfAllProducts()}
					</span>
				</button>
				<a href="/#">
					<span
						className="iconify"
						data-icon="ant-design:user-outlined"
					></span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
