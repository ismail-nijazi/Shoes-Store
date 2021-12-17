import React, { useRef } from "react";
import "./ProductImages.scss";
import shoes1 from "./Images/shoes1.jpg";
import shoes2 from "./Images/shoes2.jpg";
import shoes3 from "./Images/shoes3.jpg";
import shoes4 from "./Images/shoes4.jpg";

const ProductImages = () => {
	const largImageContainer = useRef();
	const largImage = useRef();
	const smallImages = useRef([]);
	const detailPageImages = [
		{
			img: shoes1,
			id: 1,
		},
		{
			img: shoes2,
			id: 2,
		},
		{
			img: shoes3,
			id: 3,
		},
		{
			img: shoes4,
			id: 4,
		},
	];

	const changeLargImage = (e) => {
		const imageID = e.target.dataset.id;
		smallImages.current.forEach((imgContainer) => {
			if (imgContainer !== null) {
				imgContainer.classList.remove("active");
			}
		});
		detailPageImages.forEach((image) => {
			if (image.id === +imageID) {
				largImage.current.src = image.img;
				if (e.target.classList.contains("smlImg")) {
					e.target.classList.add("active");
				} else {
					e.target.parentNode.classList.add("active");
				}
			}
		});
	};
	const getProductsImages = () => {
		return detailPageImages.map((image) => {
			return (
				<figure
					className={image.id !== 3 ? "smlImg" : "smlImg active"}
					key={image.id}
					onClick={changeLargImage}
					ref={(el) => {
						smallImages.current.push(el);
					}}
					data-id={image.id}
				>
					<img src={image.img} alt="shoes" />
				</figure>
			);
		});
	};
	return (
		<div className="images">
			<div className="image-item">
				<figure
					className="zoo-item"
					id="largImage"
					alt="shoes"
					ref={largImageContainer}
				>
					<img ref={largImage} src={shoes3} alt="product"></img>
				</figure>
			</div>
			<div className="smallImages">{getProductsImages()}</div>
		</div>
	);
};

export default ProductImages;
