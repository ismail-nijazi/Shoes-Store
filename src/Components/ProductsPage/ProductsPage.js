import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Products from "./products";
import "./productsPage.scss";

const ProductPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<main className="productPage">
			<Sidebar />
			<Products />
		</main>
	);
};

export default ProductPage;
