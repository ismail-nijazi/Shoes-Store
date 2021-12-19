import React from "react";
import { useSelector } from "react-redux";
import Product from "./ProductInCart";
import "../../Styles/ShoppingCart.scss";

function ShoppingCart() {
    const shoppingCartVisibility = useSelector(
        (state) => state.cartVisibility.visibility
    );

    const shopingCartProducts = useSelector(
        (state) => state.cartProducts.cartProducts
    );
    const getCartProducts = () => {
        return shopingCartProducts.map((product) => {
            return (
                <Product product={product} key={product.id && product.size} />
            );
        });
    };
    return (
        <section
            className={
                shoppingCartVisibility
                    ? "shoppingCart"
                    : "shoppingCart showShoppingCart"
            }
        >
            <h3>Shopping Cart</h3>
            <ul className="shoppingCartList">{getCartProducts()}</ul>
            {shopingCartProducts.length === 0 ? (
                <h3 className="empty">You have nothing in your cart</h3>
            ) : (
                <a href="/#" className="checkout">
                    Checkout
                </a>
            )}
        </section>
    );
}

export default ShoppingCart;
