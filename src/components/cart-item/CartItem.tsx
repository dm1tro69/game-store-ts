import React, {FC} from 'react';
import {GamesType} from "../../types";
import './CartItem.css'

interface Props {
  game: GamesType
}

const CartItem:FC<Props> = ({game}) => {
    return (
        <div className={'cart-item'}>
            <span>{game.title}</span>
            <div className={'cart-item__price'}>
                <span>{game.price} rub</span>
            </div>
        </div>
    );
};

export default CartItem;
