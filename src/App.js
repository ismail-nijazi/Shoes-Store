import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Head/Header";
import ShoppingCart from "./Components/ShoppingCart/Shoppingcart";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./Components/DetailPage/ProductDetailPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import Navbar from "./Components/Head/Navbar";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<ShoppingCart />
							<Main />
						</>
					}
				/>
				<Route
					path="/shoes"
					element={
						<>
							<Navbar />
							<ShoppingCart />
							<ProductsPage />
						</>
					}
				/>
				<Route
					path="/ProductDetail/:productID"
					element={
						<>
							<Navbar />
							<ShoppingCart />
							<ProductDetailPage />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							<Navbar />
							<ShoppingCart />
							<AboutPage />
						</>
					}
				/>

			</Routes>
			<Footer />
		</div>
	);
}

export default App;
