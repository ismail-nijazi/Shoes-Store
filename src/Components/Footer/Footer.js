import React from "react";
import "../../Styles/Footer.scss";

function Footer() {
    return (
        <footer>
            <main>
                <section className="footer-col-1">
                    <div className="social-medias">
                        <a href="/#" calss="sm-icons">
                            <span
                                className="iconify"
                                data-icon="akar-icons:instagram-fill"
                            ></span>
                        </a>
                        <a href="/#" calss="sm-icons">
                            <span
                                className="iconify"
                                data-icon="cib:facebook-f"
                            ></span>
                        </a>
                        <a href="/#" calss="sm-icons">
                            <span
                                className="iconify"
                                data-icon="akar-icons:twitter-fill"
                            ></span>
                        </a>
                        <a href="/#" calss="sm-icons">
                            <span
                                className="iconify"
                                data-icon="cib:pinterest-p"
                            ></span>
                        </a>
                    </div>
                    <div className="contact-info">
                        <h3>Contact us</h3>
                        <p>
                            <span
                                className="iconify"
                                data-icon="carbon:location-filled"
                            ></span>
                            344 Briarwood Road Springfield
                        </p>
                        <p>
                            <span
                                className="iconify"
                                data-icon="carbon:email"
                            ></span>
                            example@company.com
                        </p>
                        <p>
                            <span
                                className="iconify"
                                data-icon="carbon:phone-filled"
                            ></span>
                            phone: 417-799-0150
                        </p>
                    </div>
                </section>
                <section className="footer-col-2">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>
                            <a href="/#">My Orders</a>
                        </li>
                        <li>
                            <a href="/#">Return Request</a>
                        </li>
                        <li>
                            <a href="/#">Shipping and Delivery</a>
                        </li>
                        <li>
                            <a href="/#">Contact info</a>
                        </li>
                        <li>
                            <a href="/#">FAQs</a>
                        </li>
                    </ul>
                </section>
                <section className="footer-col-3">
                    <h3>About us</h3>
                    <ul>
                        <li>
                            <a href="/#">About</a>
                        </li>
                        <li>
                            <a href="/#">Careers</a>
                        </li>
                        <li>
                            <a href="/#">History</a>
                        </li>
                    </ul>
                </section>
                <section className="footer-col-4">
                    <h3>Useful links</h3>
                    <ul>
                        <li>
                            <a href="/#">Gift Cards</a>
                        </li>
                        <li>
                            <a href="/#">Sales</a>
                        </li>
                        <li>
                            <a href="/#">Brands</a>
                        </li>
                        <li>
                            <a href="/#">Payment Options</a>
                        </li>
                    </ul>
                </section>
            </main>
        </footer>
    );
}

export default Footer;
