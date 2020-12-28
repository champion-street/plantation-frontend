import {RESET_PLANTS, SAVE_PLANTS} from "../actionTypes";
import { IPlant } from "../../common/interfaces";

interface IReducerAction {
    plants: IPlant[],
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
                ...state,
                plants: action.plants
            };
        case RESET_PLANTS:
        default:
            return state;
    }
}
