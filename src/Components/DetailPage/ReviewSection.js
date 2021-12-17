import React from "react";
import Review from "./Review";
import "./ReviewSection.scss";
import profile1 from "./Images/profile_image_1.jpg";
import profile2 from "./Images/profile_image_2.jpg";

const ReviewSection = () => {
    const reviews = [
        {
            date: "5 Feb 2021",
            username: "User 1",
            image: profile1,
            text: `metus diam non felis. Nulla pulvinar ex dictum arcu mollis, vel eleifend magna vulputate. 
				Praesent auctor turpis urna, eget consectetur nulla iaculis et. Integer malesuada pretium varius.
				Vivamus sollicitudin in neque in egestas. Nullam eu est et quam congue posuere. Cras pulvinar nulla
				at malesuada euismod.`,
        },
        {
            date: "5 Oct 2021",
            username: "User 2",
            image: profile2,
            text: `Voluptate ex ullamco magna veniam labore consectetur et. Tempor deserunt quis tempor esse culpa 
			exercitation ullamco irure dolore proident nisi ad deserunt.`,
        },
    ];

    const getReviews = () => {
        return reviews.map((review) => {
            return <Review review={review} key={review.username} />;
        });
    };

    return (
        <div className="ReviewSection Specification" id="review_part">
            <div className="average_reviews">
                <h5>Rating based on 254 reviews </h5>
                <span className="stars stars_left"></span>
            </div>
            <div className="reviews">{getReviews()}</div>
            <form action="/#">
                <fieldset>
                    <legend>Write a review</legend>
                    <div className="rating">
                        <div className="rating_stars">
                            <input
                                type="radio"
                                id="five"
                                name="rate"
                                value="5"
                            />
                            <label htmlFor="five"></label>

                            <input
                                type="radio"
                                id="four"
                                name="rate"
                                value="4"
                            />
                            <label htmlFor="four"></label>

                            <input
                                type="radio"
                                id="three"
                                name="rate"
                                value="3"
                            />
                            <label htmlFor="three"></label>

                            <input
                                type="radio"
                                id="two"
                                name="rate"
                                value="2"
                            />
                            <label htmlFor="two"></label>

                            <input
                                type="radio"
                                id="one"
                                name="rate"
                                value="1"
                            />
                            <label htmlFor="one"></label>
                        </div>
                    </div>
                    <div className="row_1">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ditt namn"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Din email"
                        />
                    </div>
                    <input type="text" name="rubrik" placeholder="Rubrik" />
                    <textarea
                        name="recension"
                        rows="10"
                        placeholder="Recension"
                    ></textarea>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    );
};

export default ReviewSection;
