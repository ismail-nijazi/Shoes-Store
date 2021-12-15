import React, { useRef, useEffect } from "react";
import "./AboutPage.scss";

const PaymentSection = (props) => {
	const sectionsRef = useRef();
	useEffect(() => {
		props.addNewSection(sectionsRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section className="aboutText hide" ref={sectionsRef} id="Payment">
			<h3>consectetur adipiscing elit. Sed facilisis</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				facilisis magna vitae ante posuere lacinia. Vivamus pharetra
				tempus dolor, at tristique ipsum sagittis ut. Nullam non
				pulvinar magna. Pellentesque tempor risus et tincidunt
				consequat. Nullam vel interdum nisl, eu consequat velit. Etiam
				fringilla, leo id pellentesque aucto
			</p>
		</section>
	);
};

export default PaymentSection;
