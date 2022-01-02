import React, {FC} from 'react';
import './ItemsInCart.css'

interface Props {
    quantity: number
}

const ItemsInCart:FC<Props> = ({quantity=0}) => {
    return quantity > 0? (
        <div className={'items-in-cart'}>
            {quantity}
        </div>
    ): null;
};

export default ItemsInCart;
