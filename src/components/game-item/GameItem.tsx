import React, {FC} from 'react';
import './GameItem.css'
import {GamesType} from "../../types";
import GameCover from "../game-cover/GameCover";
import GameBuy from "../game-buy/GameBuy";
import GameGenre from "../game-genre/GameGenre";


interface Props {
    game: GamesType
}

const GameItem: FC<Props> = ({game}) => {
    return (
        <div className={'game-item'}>
            <GameCover image={game.image}/>
             <div className={'game-item__details'}>
                 <span className={'game-item__title'}>{game.title}</span>
                 <div className={'game-item__genre'}>
                     {game.genres.map((genre) => <GameGenre key={genre} genre={genre}/>)}
                 </div>
                 <div className={'game-item__buy'}>
                    <GameBuy game={game}/>
                 </div>
             </div>
        </div>
    );
};

export default GameItem;


