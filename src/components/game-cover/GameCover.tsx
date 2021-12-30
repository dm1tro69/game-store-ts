import React, {FC} from 'react';
import './GameCover.css'

interface Props {
    image: string
}

const GameCover:FC<Props> = ({image}) => {
    return (
        <div className={'game-cover'} style={{backgroundImage: `url(${image})`}}>

        </div>
    );
};

export default GameCover;
