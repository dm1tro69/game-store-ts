import {GamesType} from "../../types";
import {ActionsTypes, setItemInCartEnum} from "./types";

export interface IState {
    itemsInCart: GamesType[]

}

const initialState: IState = {
    itemsInCart: []
}

export const cartReducer = (state: IState = initialState, action: ActionsTypes): IState => {
    switch (action.type) {
        case setItemInCartEnum.SET_ITEM_IN_CART:
            return {...state, itemsInCart: [...state.itemsInCart, action.payload]}
        case setItemInCartEnum.DELETE_ITEM_FROM_CART:
            const deleteItem = initialState.itemsInCart.filter(game => game.id !== action.payload.id)
            return {...state, itemsInCart: deleteItem}
        default:
            return state
    }
}