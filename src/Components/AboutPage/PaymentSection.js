import React, { useRef, useEffect } from "react";
import "./AboutPage.scss";
import { useDispatch } from "react-redux";
import { aboutSections } from "../../redux/store";

const PaymentSection = () => {
    const sectionsRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(aboutSections.addSectionRef(sectionsRef));
    }, [dispatch]);
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
