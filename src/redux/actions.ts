import {RESET_PLANTS, SAVE_PLANTS} from "./actionTypes";
import {IPlant} from "../common/interfaces";

export const savePlants = (plants: IPlant[]) => ({
        type: SAVE_PLANTS,
        plants: plants
});

export const resetPlants = () => ({
    type: RESET_PLANTS,
    plants: undefined
});

export {};
