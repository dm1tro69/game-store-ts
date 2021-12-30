import React, {FC} from 'react';
import './GameGenre.css'

interface Props {
    genre: string
}

const GameGenre:FC<Props> = ({genre}) => {
    return (
        <span className={'game-genre'}>
            {genre}
        </span>
    );
};

export default GameGenre;
