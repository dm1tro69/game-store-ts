import {GamesType} from "../../types";
import {GamesActionType, gamesEnum} from "./types";


export interface IGamesState {
    currentGame: GamesType | null
}

const initialState: IGamesState = {
    currentGame: null
}

export const gamesReducer = (state: IGamesState = initialState, actions: GamesActionType): IGamesState => {
    switch (actions.type) {
        case gamesEnum.ADD_GAME:
            return {...state, currentGame: actions.payload}
        default:
            return state
    }
}