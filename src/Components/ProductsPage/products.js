import React, { useState, useRef, useEffect } from "react";
import Product from "../main/Product";
import { useSelector } from "react-redux";
import "./Products.scss";

const Products = () => {
	const filteredProducts = useSelector(
		(state) => state.selectedFilters.productToBeShown
	);
	const allProducts = useSelector(
		(state) => state.selectedFilters.allProducts
	);
	const [orderBy, setOrderBy] = useState("Recommended");
	const [productsToBeShown, changeTheOrder] = useState(filteredProducts);
	const orderBy_list = useRef();
	const downArrow = useRef();

	useEffect(() => {
		changeTheOrder(filteredProducts);
	}, [filteredProducts]);

	const toggleOrderByList = (e) => {
		orderBy_list.current.classList.toggle("hide");
		downArrow.current.classList.toggle("rotate180");
	};

	const changeOrderBy = (e) => {
		if (e.target.value !== orderBy) {
			let newOrdered = [...productsToBeShown];
			if (e.target.value === "Product Name") {
				newOrdered.sort((product1, product2) => {
					let nameProduct1 = product1.name.toLowerCase(),
						nameProduct2 = product2.name.toLowerCase();
					if (nameProduct1 < nameProduct2) {
						return -1;
					} else if (nameProduct1 > nameProduct2) {
						return 1;
					}
					return 0;
				});
			} else if (e.target.value === "Newest") {
				newOrdered.sort((product1, product2) => {
					return (
						new Date(product2.arrivalDate) -
						new Date(product1.arrivalDate)
					);
				});
			} else if (e.target.value.startsWith("Price")) {
				newOrdered.sort((product1, product2) => {
					return product1.price - product2.price;
				});
				if (e.target.value === "Price High-Low") {
					newOrdered.sort((product1, product2) => {
						return product2.price - product1.price;
					});
				}
			}
			changeTheOrder(newOrdered);
			setOrderBy(e.target.value);
			orderBy_list.current.classList.add("hide");
			downArrow.current.classList.remove("rotate180");
		}
	};

	const getProducts = () => {
		return productsToBeShown.map((product) => {
			return (
				<Product
					product={product}
					allProducts={allProducts}
					key={product.id}
				/>
			);
		});
	};
	return (
		<section className="products">
			<div className="head">
				<h4>140 products</h4>

				<div className="orderBy">
					<div className="buttons">
						<button className="filterButton">
							Filter
							<span
								className="iconify"
								data-icon="mi:filter"
							></span>
						</button>
						<button
							onClick={toggleOrderByList}
							className="orderByButton"
						>
							Sorted By:<span>{orderBy}</span>
							<i
								className="fas fa-chevron-down"
								ref={downArrow}
							></i>
						</button>
					</div>

					<div className="orderBy-list hide" ref={orderBy_list}>
						<button value="Recommend" onClick={changeOrderBy}>
							Recommend
						</button>
						<button value="Product Name" onClick={changeOrderBy}>
							Product Name
						</button>
						<button value="Newest" onClick={changeOrderBy}>
							Newest
						</button>
						<button value="Price Low-High" onClick={changeOrderBy}>
							Price Low-High
						</button>
						<button value="Price High-Low" onClick={changeOrderBy}>
							Price High-Low
						</button>
					</div>
				</div>
			</div>
			<ul className="productsList">{getProducts()}</ul>
		</section>
	);
};

export default Products;
