import React from "react";
import { useSelector } from "react-redux";
import "./AboutPage.scss";
import CustomerService from "./Images/CustomerService.png";
import DeliverySection from "./DeliverySection";
import PaymentSection from "./PaymentSection";
import SupportSection from "./SupportSection";

const AboutPage = () => {
    const aboutSections = useSelector(
        (state) => state.aboutPageSections.sections
    );

    const showSection = (e) => {
        const id = e.target.parentNode.dataset.id;
        aboutSections.forEach((section) => {
            if (section.current.id === id) {
                section.current.classList.toggle("hide");
            }
        });
    };
    return (
        <main className="AboutPage">
            <section className="header-container">
                <div className="CustomerServiceHeader">
                    <h3>Kundservice</h3>
                    <figure>
                        <img src={CustomerService} alt="customer service" />
                    </figure>
                </div>
            </section>
            <section className="header-container aboutText">
                <section>
                    <h4>Contact oss</h4>
                    <p>
                        Cras diam erat, rutrum id turpis sed, dapibus tincidunt
                        libero. Nunc id tortor vel leo facilisis tristique sit
                        amet et nunc. Vivamus massa nibh, ultrices eu lectus sit
                        amet
                    </p>
                </section>
            </section>
            <section className="header-container aboutSections">
                <div className="sectionsContent">
                    <div>
                        <i className="fas fa-headset fa-2x"></i>
                        <h4>Support and service</h4>
                        <button
                            className="showMoreBtn"
                            data-id="Support"
                            onClick={showSection}
                        >
                            <i className="fas fa-sort-down fa-2x"></i>
                        </button>
                    </div>
                    <SupportSection />
                </div>
                <div className="sectionsContent">
                    <div>
                        <i className="fas fa-truck fa-2x"></i>
                        <h4>Delivery</h4>
                        <button
                            className="showMoreBtn"
                            data-id="Delivery"
                            onClick={showSection}
                        >
                            <i className="fas fa-sort-down fa-2x"></i>
                        </button>
                    </div>
                    <DeliverySection />
                </div>
                <div className="sectionsContent">
                    <div>
                        <i className="far fa-credit-card fa-2x"></i>
                        <h4>Payment</h4>
                        <button
                            className="showMoreBtn"
                            data-id="Payment"
                            onClick={showSection}
                        >
                            <i className="fas fa-sort-down fa-2x"></i>
                        </button>
                    </div>
                    <PaymentSection />
                </div>
            </section>
            <section className="questionsSection">
                <h3>Common questions</h3>
                <div className="commonQuestions">
                    <ul>
                        <li>
                            molestie semper ligula. Phasellus mollis ac mi sit
                            amet eleifend.
                        </li>
                        <li>
                            Suspendisse potenti. Maecenas congue volutpat risus
                            a porttitor
                        </li>
                        <li>
                            ipsum vitae eros dictum facilisis. Integer malesuada
                            justo nunc, non lobortis augue pharetra non
                        </li>
                        <li>hendrerit. Duis eu feugiat ante</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
