import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartProductsActions } from "../../redux/store";
import ProductImages from "./ProductImages";
import "./ProductShopInfo.scss";

const ProductShopInfo = () => {
	const product = useSelector(state => state.selectedProduct.product);
	const [selectedSize, setSize] = useState(product.sizes[0]);
	const dispatch = useDispatch();

	const selectSize = (e) => {
		setSize(+e.target.dataset.size);
	}
	const generateSizeList = () => {
		return product.sizes.map((size) => {
			return (
				<li
					className={size === selectedSize ? 'size active' : 'size'}
					data-size={size}
					onClick={selectSize}
					key={size}
				>
					{size}
				</li>
			);
		});
	};

	const generateColorList = () => {
		return product.colors.map((color) => {
			return (
				<button href="/#" className="dot" style={{ backgroundColor: color }}></button>
			);
		});
	}

	const addToCart = () => {
		let addToCartProduct = { ...product };
		addToCartProduct["count"] = 1;
		addToCartProduct["basePrice"] = product.price;
		addToCartProduct["size"] = selectedSize;

		dispatch(cartProductsActions.addProduct(addToCartProduct));
	};

	return (
		<section className="productShopInfo">
			<ProductImages />
			<div className="shopInfo">
				<h4>{product.name}</h4>
				<span className="stars stars_left"></span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Maecenas felis arcu, facilisis eget odio vitae, pretium
					euismod nunc. Ut tincidunt lectus elit. Sed porttitor nulla
					ac augue lacinia tempor. Phasellus odio est, sollicitudin at
					finibus eu, lobortis vel ipsum. Ut convallis, nunc sit amet
					efficitur tempor, ligula leo vehicula nisl,
				</p>
				<div className="product_delivery_info">
					<div>
						<i className="fas fa-check-circle"></i>
						Available on laws
					</div>
					<div>
						<i className="fas fa-truck"></i>
						Free shipping
					</div>
				</div>
				<div className="cirkel_color">
					Colors:
					{generateColorList()}
				</div>
				<div>
					Sizes:
					<ul className="sizeList ">
						{generateSizeList()}
					</ul>
				</div>

				<h3 className="price">${product.price}</h3>
				<div className="showItemsInRow">
					<div className="chooseProductCount">
						<button className="btn-plus_minus">
							<i className="fas fa-minus"></i>
						</button>
						<h2 id="count_of_product">1</h2>
						<button className="btn-plus_minus">
							<i className="fas fa-plus"></i>
						</button>
					</div>
					<div>
						<button className="btn" onClick={addToCart}>
							<i className="fas fa-cart-plus"></i>Add to
							shoppingCart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductShopInfo;
