import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartProductsActions, productDetail } from "../../redux/store";
import { Link } from "react-router-dom";
import "../../Styles/Product.scss";

function Product(props) {
	const dispatch = useDispatch();
	const product = props.product;
	const sizeRef = useRef();
	let [size, setSize] = useState(product.sizes[0]);
	const changeSize = (e) => {
		setSize(+e.target.dataset.size);
		showSizeList();
	};

	const changeSelectedProduct = () => {
		dispatch(productDetail.changeProduct(product));
	}

	const showSizeList = () => {
		sizeRef.current.classList.toggle("show");
	};

	const generateSizeList = () => {
		return product.sizes.map((size) => {
			return (
				<li
					className="size"
					onClick={changeSize}
					data-size={size}
					key={size}
				>
					{size}
				</li>
			);
		});
	};

	const addToCart = () => {
		let addToCartProduct = { ...product };
		addToCartProduct["count"] = 1;
		addToCartProduct["basePrice"] = product.price;
		addToCartProduct["size"] = size;

		dispatch(cartProductsActions.addProduct(addToCartProduct));
	};
	return (
		<li className="product">
			<Link to={`/ProductDetail/${product.id}`} className="productLink" onClick={changeSelectedProduct}>
				<div className="product-img">
					<img src={props.product.image} alt="products name" />
				</div>
			</Link>
			<div>
				<div className="productInfo">
					<div>
						<h5>{props.product.name}</h5>
						<p>{props.product.moreInfo}</p>
					</div>
					<h3 className="price">${props.product.price}</h3>
				</div>
				<div className="productButtons">
					<button className="sizeListButton" onClick={showSizeList}>
						<span>EU {size}</span>
						<span
							className="iconify"
							data-icon="ci:chevron-big-down"
						></span>
					</button>
					<ul className="sizeList" ref={sizeRef}>
						{generateSizeList()}
					</ul>
					<button onClick={addToCart}>
						<span>Add to cart</span>
						<span
							className="iconify"
							data-icon="bi:bag-plus"
						></span>
					</button>
				</div>
			</div>
		</li>
	);
}

export default Product;
