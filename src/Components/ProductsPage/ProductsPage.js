import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { navbarActions } from "../../redux/store";
import Sidebar from "./Sidebar";
import Products from "./products";
import "./productsPage.scss";

const ProductPage = () => {
    const [visibilitySidebar, changeVisibility] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(navbarActions.show());
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
