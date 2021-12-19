import React, { useEffect } from "react";
import ProductShopInfo from "./ProductShopInfo";
import ProductDetail from "./ProductDetail";

const ProductDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <ProductShopInfo />
            <ProductDetail />
        </main>
    );
};

export default ProductDetailPage;
