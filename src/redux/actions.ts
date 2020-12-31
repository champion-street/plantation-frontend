import {
    ADD_PLANT,
    SAVE_PLANTS,
    OPEN_DYNAMIC_MODAL,
    CLOSE_DYNAMIC_MODAL
} from "./actionTypes";
import {IPlant} from "../common/interfaces";

// Plant Actions
export const savePlants = (plants: IPlant[]): object => ({
        type: SAVE_PLANTS,
        plants: plants
});

export const addPlant = (plant: IPlant): object => ({
    type: ADD_PLANT,
    plant: plant,
});

// Modal Actions
export const openDynamicModal = (modalData: any): object => ({
    type: OPEN_DYNAMIC_MODAL,
    data: modalData
});

export const closeDynamicModal = (): object => ({
    type: CLOSE_DYNAMIC_MODAL,
});
