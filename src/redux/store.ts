import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
    rootReducer,
    composeWithDevTools() //enable by uncommenting, if you want to use Redux DevTools in the browser
);
