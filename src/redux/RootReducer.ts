import {combineReducers} from "redux";
import {cartReducer} from "./cart/reducer";
import {gamesReducer} from "./games/reducer";

export const RootReducer = combineReducers({
   cart: cartReducer,
   games: gamesReducer
})

export type RootType = ReturnType<typeof RootReducer>