import React from "react";
import "./ProductInfo.scss";

const ProductInfo = () => {
	return (
		<div className="productInfo" id="productInfo_part">
			<div className="info">
				<p>
					Pariatur sunt pariatur id ipsum est veniam. Minim commodo aliqua quis dolor ipsum.
					Reprehenderit sint proident dolor duis sit cupidatat eu duis ipsum. Fugiat laborum irure
					mollit anim id duis nostrud enim minim qui veniam Lorem fugiat aliquip. Sit reprehenderit id dolore fugiat exercitation officia.
				</p>

			</div>
			<ul>
				<li className="headRow">
					<h5>Features</h5>

					<ul>
						<li className="rows">
							<span>Weather-resistant leather upper</span>
						</li>
						<li className="rows">
							<span>Warm textile inner</span>
						</li>
						<li className="rows">
							<span>High-top design</span>
						</li>
						<li className="rows">
							<span>Padded collar</span>
						</li>
						<li className="rows">
							<span>Lace-up closure</span>
						</li>
						<li className="rows">
							<span>Re-enforced toecap</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default ProductInfo;
