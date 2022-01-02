import {GamesType} from "../../types";
import {deleteItemFromCartType, setItemInCartEnum, setItemInCartType} from "./types";

export const setItemInCart = (game: GamesType): setItemInCartType => {
    return {
        type: setItemInCartEnum.SET_ITEM_IN_CART,
        payload: game
    }
}
export const deleteItemFromCart = (game: number):deleteItemFromCartType => {
    return {
        type: setItemInCartEnum.DELETE_ITEM_FROM_CART,
        payload: game
    }
}