import {GamesType} from "../../types";


export enum gamesEnum {
    ADD_GAME = 'ADD_GAME'
}



export type GamesActionType = {
    type: typeof gamesEnum.ADD_GAME,
    payload: GamesType
}