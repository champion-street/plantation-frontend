import {OPEN_DYNAMIC_MODAL, CLOSE_DYNAMIC_MODAL} from "../actionTypes";

interface IReducerAction {
    type: string;
    data?: any;
}

interface IReducerState {
    data: any;
    openDynamicModal: boolean;
}

const initialState: IReducerState = {
    data: {},
    openDynamicModal: false
}

export default function (state = initialState, action: IReducerAction) {
    switch (action.type) {
        case OPEN_DYNAMIC_MODAL:
            return {
                data: action.data,
                openDynamicModal: true,
            };
        case CLOSE_DYNAMIC_MODAL:
            return {
                ...state,
                openDynamicModal: false,
            }
        default:
            return state;
    }
}
