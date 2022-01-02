import React, {useState} from 'react';
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";
import {RootType} from "../../redux/RootReducer";
import {IState} from "../../redux/cart/reducer";
import CartMenu from "../cart-menu/CartMenu";
import {totalItemsPrice} from "../../utils";
import ItemsInCart from "../items-in-cart/ItemsInCart";

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState<boolean>(false)
    const {itemsInCart} = useSelector<RootType, IState>(state => state.cart)
    const totalPrice = totalItemsPrice(itemsInCart)

    return (
        <div className={'cart-block'}>
            <ItemsInCart quantity={itemsInCart.length}/>
            <BiCartAlt size={25} className={'cart-block__icon'} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className={'cart-block__total-price'}>{totalPrice} rub</span> : null}
            {isCartMenuVisible && <CartMenu items={itemsInCart} onClick={() => {}}/>}
        </div>
    );
};

export default CartBlock;
