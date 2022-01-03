import React from 'react';
import './GamePage.css'
import {useSelector} from "react-redux";
import {RootType} from "../../redux/RootReducer";
import {IGamesState} from "../../redux/games/reducer";
import GameCover from "../../components/game-cover/GameCover";
import GameGenre from "../../components/game-genre/GameGenre";
import GameBuy from "../../components/game-buy/GameBuy";


const GamePage = () => {

    const {currentGame} = useSelector<RootType, IGamesState>(state => state.games)

    if (!currentGame) return null

    return (
        <div className={'game-page'}>
            <h1 className={'game-page__title'}>{currentGame.title}</h1>
            <div className={'game-page__content'}>
                <div className={'game-page__left'}>
                    <iframe
                        src={currentGame.video}
                        frameBorder={'0'}
                        height={'400px'}
                        title={'Youtube Video Player'}
                        width={'90%'}>
                    </iframe>
                </div>
                <div className={'game-page__right'}>
                    <GameCover image={currentGame.image}/>
                    <p>{currentGame.description}</p>
                    <p className={'secondary-text'}>
                        Популярные метки этого продукта:
                    </p>
                    {currentGame!.genres.map(genre => <GameGenre key={genre} genre={genre}/>)}
                    <div className={'game-page__buy-game'}>
                        <GameBuy game={currentGame}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
