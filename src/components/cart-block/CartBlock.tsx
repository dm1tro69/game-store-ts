import React from 'react';
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";
import {RootType} from "../../redux/RootReducer";
import {IState} from "../../redux/cart/reducer";

const CartBlock = () => {
    const {itemsInCart} = useSelector<RootType, IState>(state => state.cart)
    const totalPrice = itemsInCart.reduce((acc: number, game) => {
        return acc += game.price
    },0)
    console.log(totalPrice)
    return (
        <div className={'cart-block'}>
            <BiCartAlt size={25} className={'cart-block__icon'}/>
            <span className={'cart-block__total-price'}>{totalPrice} rub</span>
        </div>
    );
};

export default CartBlock;
