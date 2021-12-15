import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtersSelection } from "../../redux/store";
import "./productsPage.scss";

const Sidebar = () => {
	const dispatch = useDispatch();
	const allFilters = useSelector((state) => state.filters);
	const selectedFilters = useSelector(
		(state) => state.selectedFilters.filters
	);
	const [maxPrice, setMaxPrice] = useState(200);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		dispatch(filtersSelection.filterProducts());
	}, [dispatch]);

	const changeMaxPrice = (e) => {
		setMaxPrice(e.target.value);

		clearTimeout(timer);
		const newTimer = setTimeout(() => {
			dispatch(
				filtersSelection.addRemoveFilter({
					type: "price",
					item: +e.target.value,
				})
			);
			dispatch(filtersSelection.filterProducts());
		}, 300);
		setTimer(newTimer);
	};
	const add_Remove_Filter = (e) => {
		const filterType = e.target.dataset.filter;
		const item = e.target.name;
		dispatch(
			filtersSelection.addRemoveFilter({
				type: filterType,
				item: item,
			})
		);
		dispatch(filtersSelection.filterProducts());
	};

	const generateFilterList = (filterList, filterType) => {
		let inputs = [];
		const classList =
			filterList === allFilters.sizes ? "displayInline" : "";

		for (const [id, brand] of Object.entries(filterList)) {
			inputs.push(
				<label htmlFor={brand} key={id} className={classList}>
					{brand}
					<input
						type="checkbox"
						id={brand}
						name={brand}
						data-filter={filterType}
						onChange={add_Remove_Filter}
					/>
					<span className="checkmark"></span>
				</label>
			);
		}
		return inputs;
	};

	const generateColors = (filterType) => {
		let inputs = [];
		for (const color of allFilters.colors) {
			inputs.push(
				<label
					htmlFor={color}
					className="color displayInline"
					key={color}
				>
					<input
						type="checkbox"
						id={color}
						name={color}
						data-filter={filterType}
						onClick={add_Remove_Filter}
					/>
					{addCircleColor(color)}
				</label>
			);
		}
		return inputs;
	};

	const addCircleColor = (color) => {
		const borderColor =
			color === "#fff" || color === "#ffffff" ? "#ddd" : color;
		for (const item of selectedFilters.colors) {
			if (item === color) {
				return (
					<span
						className="checkmark"
						style={{
							backgroundColor: color,
							borderColor: borderColor,
						}}
					></span>
				);
			}
		}
		return (
			<span
				className="checkmark"
				style={{ borderColor: borderColor }}
			></span>
		);
	};

	return (
		<section className="filter">
			<h4>Price</h4>
			<input
				type="range"
				name="price"
				min="0"
				max="1000"
				value={maxPrice}
				onChange={changeMaxPrice}
			/>
			<div className="maxPrice">
				<p>
					Max price:<span>{maxPrice}$</span>
				</p>
			</div>
			<div className="row">
				<h4>Brands</h4>
				{generateFilterList(allFilters.brands, "brand")}
			</div>
			<div className="row">
				<h4>Product Type</h4>
				{generateFilterList(allFilters.types, "types")}
			</div>
			<div className="row">
				<h4>Size</h4>
				{generateFilterList(allFilters.sizes, "sizes")}
			</div>
			<div className="row colors">
				<h4>Colors</h4>
				{generateColors("colors")}
			</div>
		</section>
	);
};

export default Sidebar;
