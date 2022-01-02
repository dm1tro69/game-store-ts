import React, {FC} from 'react';
import './CartMenu.css'
import {GamesType} from "../../types";
import {totalItemsPrice} from "../../utils";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

interface Props {
    items: GamesType[]
    onClick: () => void
}

const CartMenu: FC<Props> = ({items, onClick}) => {
    return (
        <div className={'cart-menu'}>
            <div className={'cart-menu__games-list'}>
                {items.length > 0 ? items.map(game => <CartItem key={game.id} game={game}/>) : 'Корзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className={'cart-menu__arrange'}>
                        <div className={'cart-menu__total-price'}>
                            <span>Итого: </span>
                            <span>{totalItemsPrice(items)} rub</span>
                        </div>
                        <Button onClick={onClick} type={'primary'} size={'m'}>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

export default CartMenu;
