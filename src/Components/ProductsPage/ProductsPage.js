import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Products from "./products";
import "./productsPage.scss";

const ProductPage = () => {
    const [visibilitySidebar, changeVisibility] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const changeSidebarVisibility = (visibility) => {
        changeVisibility(visibility);
    };

    return (
        <main className="productPage">
            <Sidebar
                sidebarVisibility={visibilitySidebar}
                changeSidebarVisibility={changeSidebarVisibility}
            />
            <Products
                sidebarVisibility={visibilitySidebar}
                changeSidebarVisibility={changeSidebarVisibility}
            />
        </main>
    );
};

export default ProductPage;
