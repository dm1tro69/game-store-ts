import React, {FC} from 'react';
import {GamesType} from "../../types";
import './GameBuy.css'
import Button from "../button/Button";

interface Props {
    game: GamesType
}

const GameBuy:FC<Props> = ({game}) => {
    return (
        <div className={'game-buy'}>
            <span className={'game-buy__price'}>{game.price} rub</span>
            <Button size={'s'} onClick={() => {}} type={'primary'}>
                В Корзину
            </Button>
        </div>
    );
};

 export default GameBuy;
