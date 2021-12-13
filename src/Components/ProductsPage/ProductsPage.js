import React from "react";
import Sidebar from "./Sidebar";
import Products from "./products";
import "./productsPage.scss";

const ProductPage = () => {
    return (
        <main className="productPage">
            <Sidebar />
            <Products />
        </main>
    );
};

export default ProductPage;
