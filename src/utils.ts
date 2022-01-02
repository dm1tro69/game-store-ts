import {GamesType} from "./types";

export const totalItemsPrice = (item: GamesType[]) => {
    return item.reduce((acc: number, game) => {
        return acc += game.price
    },0)
}