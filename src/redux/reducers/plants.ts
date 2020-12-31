import {ADD_PLANT, SAVE_PLANTS} from "../actionTypes";
import { IPlant } from "../../common/interfaces";

interface IReducerAction {
    plants?: IPlant[],
    plant?: IPlant,
    type: string
}

interface IReducerState {
    plants: IPlant[]
}

const initialState: IReducerState = {
    plants: [],
}

export default function (state = initialState, action: IReducerAction) {
    switch (action.type) {
        case SAVE_PLANTS:
            return {
                plants: action.plants
            };
        case ADD_PLANT:
            return {
                plants: [...state.plants, action.plant]
            };
        default:
            return state;
    }
}
