import React from "react";
import "./ReviewSection.scss";

const Review = (props) => {
    return (
        <div>
            <figure className="user_info">
                <a href="/#" className="profileImage">
                    <img src={props.review.image} alt="User profile" />
                </a>
                <span>{props.review.date}</span>
            </figure>
            <div className="review">
                <p>{props.review.text}</p>
                <span className="stars stars_right"></span>
            </div>
        </div>
    );
};

export default Review;
