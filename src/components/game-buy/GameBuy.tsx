import React, {FC, MouseEvent} from 'react';
import {GamesType} from "../../types";
import './GameBuy.css'
import Button from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/actions";
import {RootType} from "../../redux/RootReducer";
import {IState} from "../../redux/cart/reducer";

interface Props {
    game: GamesType
}

const GameBuy:FC<Props> = ({game}) => {
    const dispatch = useDispatch()

    const {itemsInCart} = useSelector<RootType, IState>(state => state.cart)
    const isItemInCart = itemsInCart.some(item => item.id === game.id)
    const handleAddItemInCart = () => {
        if (isItemInCart){
            dispatch(deleteItemFromCart(game.id))
        }else {
            dispatch(setItemInCart(game))
        }

    }
    return (
        <div className={'game-buy'}>
            <span className={'game-buy__price'}>{game.price} rub</span>
            <Button
                size={'s'}
                onClick={handleAddItemInCart}
                type={isItemInCart?'secondary':'primary'}
            >
                {isItemInCart? 'Убрать из корзины': 'В Корзину'}
            </Button>
        </div>
    );
};

 export default GameBuy;
