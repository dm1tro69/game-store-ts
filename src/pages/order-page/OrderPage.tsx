import React from 'react';
import './OrderPage.css'
import {useSelector} from "react-redux";
import {RootType} from "../../redux/RootReducer";
import {IState} from "../../redux/cart/reducer";
import OrderItem from "../order-item/OrderItem";
import {totalItemsPrice} from "../../utils";

const OrderPage = () => {

    const {itemsInCart} = useSelector<RootType, IState>(state => state.cart)

    if (itemsInCart.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className={'order-page'}>
            <div className={'order-page__left'}>
                {itemsInCart.map((item) => <OrderItem key={item.id} game={item}/>)}
            </div>
            <div className={'order-page__right'}>
                <div className={'order-page__total-price'}>
                    <span>{itemsInCart.length} товаров на сумму {totalItemsPrice(itemsInCart)} rub</span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
