import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { navbarActions } from "../../redux/store";
import { Link } from "react-router-dom";
import "../../Styles/Main.scss";

function Main() {
    const dispatch = useDispatch();
    let allProducts = [
        {
            name: "Product 3",
            price: 149,
            types: "Sneakers",
            image: "/Images/products/shoe-3.png",
            moreInfo: "some more info about product 3",
            sizes: [40, 41, 42, 43, 45, 46],
            colors: ["#fff", "#000", "#999"],
            arrivalDate: "2021-06-05",
            brand: "Adidas",
            id: 3,
        },
        {
            name: "Product 4",
            price: 119,
            types: "Sneakers",
            image: "/Images/products/shoe-4.png",
            moreInfo: "some more info about product 4",
            sizes: [38, 39, 40, 41, 42],
            colors: ["#cf2525", "#0a48f2"],
            arrivalDate: "2021-08-15",
            brand: "Adidas",
            id: 4,
        },
        {
            name: "Product 1",
            price: 99,
            types: "Sneakers",
            image: "/Images/products/shoe-1.png",
            moreInfo: "some more info about product 1",
            sizes: [35, 36, 38, 39, 40, 41, 42],
            colors: ["#fff", "#000", "#999"],
            arrivalDate: "2021-11-10",
            brand: "Puma",
            id: 1,
        },
        {
            name: "Product 2",
            price: 199,
            types: "Sneakers",
            image: "/Images/products/shoe-2.png",
            moreInfo: "some more info about product 2",
            sizes: [40, 41, 42, 43],
            colors: ["#fff", "#000", "#0a48f2"],
            arrivalDate: "2021-09-28",
            brand: "Nike",
            id: 2,
        },
    ];

    useEffect(() => {
        dispatch(navbarActions.show());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = () => {
        return allProducts.map((product) => {
            return (
                <Product
                    product={product}
                    allProducts={allProducts}
                    key={product.id}
                />
            );
        });
    };
    return (
        <main>
            <section className="main-row-1">
                <h1>Category</h1>
                <div>
                    <Link to="/shoes" className="btn-category men">
                        <h3>Men</h3>
                    </Link>
                    <Link to="/shoes" className="btn-category women">
                        <h3>Women</h3>
                    </Link>
                </div>
            </section>
            <section className="main-row-2">
                <div>
                    <h1>Mauris suscipit</h1>
                    <p>
                        at suscipit enim posuere quis. Donec volutpat luctus
                        dolor, id aliquet mass donec dictum
                    </p>
                    <a href="/#">See more info</a>
                </div>
            </section>
            <section className="main-row-3">
                <h2 className="main-titles">Popular Items</h2>

                <ul className="productsList">{getProducts()}</ul>
            </section>
        </main>
    );
}

export default Main;
