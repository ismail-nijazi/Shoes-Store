import React, { useRef, useEffect } from "react";
import "./AboutPage.scss";

const DeliverySection = (props) => {
	const sectionsRef = useRef();

	useEffect(() => {
		props.addNewSection(sectionsRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section
			className="aboutText hide"
			ref={sectionsRef}
			id="Delivery"
		>
			<h3>Morbi vel augue vel mi ornare faucibus rutrum sed ligula</h3>
			<p>
				Morbi vel augue vel mi ornare faucibus rutrum sed ligula. Ut
				congue nisi sit amet nunc sagittis dignissim. Sed vehicula
				auctor justo, eget aliquet ante pellentesque sed. Ut quis sem
				congue, lacinia urna eu, placerat arcu. Donec bibendum finibus
				arcu, fringilla congue orci congue nec. Nullam eu dolor cursus,
				mollis ex et, facilisis sapien. Nam odio nisl, viverra sed leo
				eu, convallis tincidunt turpis. Etiam finibus tortor non elit
				ornare, sit amet suscipit enim euismod
			</p>
		</section>
	);
};

export default DeliverySection;
