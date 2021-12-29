import React from 'react';
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'

const CartBlock = () => {
    return (
        <div className={'cart-block'}>
            <BiCartAlt size={25} className={'cart-block__icon'}/>
            <span className={'cart-block__total-price'}>2227 rub</span>
        </div>
    );
};

export default CartBlock;
