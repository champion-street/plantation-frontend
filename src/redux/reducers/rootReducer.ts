import { combineReducers } from 'redux';
import Plants from './plants';
import DynamicModal from "./dynamicModal";

const rootReducer = combineReducers({
    plants: Plants,
    dynamicModal: DynamicModal
});

export default rootReducer;
