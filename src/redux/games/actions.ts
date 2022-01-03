import {GamesType} from "../../types";
import {GamesActionType, gamesEnum} from "./types";


export const setCurrentGame = (game: GamesType): GamesActionType => {
    return {
        type: gamesEnum.ADD_GAME,
        payload: game
    }
}