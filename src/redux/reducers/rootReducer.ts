import { combineReducers } from 'redux';
import Plants from './plants';

const rootReducer = combineReducers({
    plants: Plants
});

export default rootReducer;
