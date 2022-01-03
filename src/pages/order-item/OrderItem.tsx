import React, {FC} from 'react';
import './OrderItem.css'
import {GamesType} from "../../types";
import {AiOutlineCloseCircle} from "react-icons/ai";
import GameCover from "../../components/game-cover/GameCover";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/actions";

interface Props {
    game: GamesType
}

const OrderItem:FC<Props> = ({game}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className={'order-item'}>
            <div className={'order-item__cover'}>
                <GameCover image={game.image}/>
            </div>
            <div className={'order-item__title'}>
                <span>{game.title}</span>
            </div>
            <div className={'order-item__price'}>
                <span>{game.price} rub</span>
                <AiOutlineCloseCircle
                    size={25}
                    className={'cart-item__delete-icon'}
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
};

export default OrderItem;
