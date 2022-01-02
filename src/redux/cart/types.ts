import {setItemInCart} from "./actions";
import {GamesType} from "../../types";


export enum setItemInCartEnum {
    SET_ITEM_IN_CART= 'SET_ITEM_IN_CART',
    DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART'
}

export type setItemInCartType =  {
    type: setItemInCartEnum.SET_ITEM_IN_CART,
    payload: any
}
export type deleteItemFromCartType = {
    type: setItemInCartEnum.DELETE_ITEM_FROM_CART,
    payload: any
}

export type ActionsTypes = setItemInCartType | deleteItemFromCartType