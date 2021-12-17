import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartProductsActions } from "../../redux/store";
import "../../Styles/ShoppingCart.scss";

function Product(props) {
    const shoppingCartProducts = useSelector(
        (state) => state.cartProducts.cartProducts
    );
    const dispatch = useDispatch();
    const increaseTheCount = () => {
        for (let i = 0; i < shoppingCartProducts.length; i++) {
            if (
                shoppingCartProducts[i].id === props.product.id &&
                shoppingCartProducts[i].size === props.product.size
            ) {
                dispatch(cartProductsActions.addProduct(props.product));
            }
        }
    };

    const decreaseTheCount = () => {
        for (let i = 0; i < shoppingCartProducts.length; i++) {
            if (
                shoppingCartProducts[i].id === props.product.id &&
                shoppingCartProducts[i].size === props.product.size
            ) {
                dispatch(cartProductsActions.decreaseTheCount(props.product));
            }
        }
    };

    return (
        <li className="cart-product">
            <figure>
                <img src={props.product.image} alt="product" />
            </figure>
            <div>
                <h5>{props.product.name}</h5>
                <h6 className="price">${props.product.price}</h6>
                <h6>Size: {props.product.size}</h6>
                <div>
                    <button onClick={decreaseTheCount}>-</button>
                    <span className="countOfProduct">
                        {props.product.count}
                    </span>
                    <button onClick={increaseTheCount}>+</button>
                </div>
            </div>
        </li>
    );
}

export default Product;
