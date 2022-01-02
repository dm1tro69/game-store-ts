import React, {FC, MouseEvent} from 'react';
import {GamesType} from "../../types";
import './GameBuy.css'
import Button from "../button/Button";
import {useDispatch} from "react-redux";
import {setItemInCart} from "../../redux/cart/actions";

interface Props {
    game: GamesType
}

const GameBuy:FC<Props> = ({game}) => {
    const dispatch = useDispatch()
    const handleAddItemInCart = () => {
        dispatch(setItemInCart(game))
    }
    return (
        <div className={'game-buy'}>
            <span className={'game-buy__price'}>{game.price} rub</span>
            <Button
                size={'s'}
                onClick={handleAddItemInCart}
                type={'primary'}
            >
                В Корзину
            </Button>
        </div>
    );
};

 export default GameBuy;
