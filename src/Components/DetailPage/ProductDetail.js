import React, { useState, useRef } from "react";
import ReviewSection from "./ReviewSection";
import ProductInfo from "./ProductInfo";
import Specification from "./Specification";
import "./ProductDetail.scss";

const ProductDetail = () => {
	const [activeTab, changeTab] = useState(<ProductInfo />);
	const tabRefs = useRef([]);

	const showTab = (e) => {
		tabRefs.current.forEach((tab) => {
			if (tab !== null) {
				tab.classList.remove("activeTab");
			}
		});
		if (e.target.id === "detailsTab") {
			changeTab(<ProductInfo />);
			e.target.parentNode.classList.add("activeTab");
		} else if (e.target.id === "specificationTab") {
			changeTab(<Specification />);
			e.target.parentNode.classList.add("activeTab");
		} else if (e.target.id === "reviewsTab") {
			changeTab(<ReviewSection />);
			e.target.parentNode.classList.add("activeTab");
		}
	};

	return (
		<section className="details">
			<div className="links DescriptionHeader">
				<ul>
					<li
						className="nav-links activeTab"
						ref={(tab) => {
							tabRefs.current.push(tab);
						}}
					>
						<div className="link" id="detailsTab" onClick={showTab}>
							Description
						</div>
					</li>
					<li
						className="nav-links"
						ref={(tab) => {
							tabRefs.current.push(tab);
						}}
					>
						<div
							className="link"
							id="specificationTab"
							onClick={showTab}
						>
							Specification
						</div>
					</li>
					<li
						className="nav-links"
						ref={(tab) => {
							tabRefs.current.push(tab);
						}}
					>
						<div className="link" id="reviewsTab" onClick={showTab}>
							Reviews
						</div>
					</li>
				</ul>
			</div>
			<section className="detailsContent">{activeTab}</section>
		</section>
	);
};

export default ProductDetail;
