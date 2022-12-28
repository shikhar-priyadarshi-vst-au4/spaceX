import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import historyReducer from "./reducers/history";
import payloadReducer from './reducers/payload';

const rootReducer = combineReducers({
    historyState: historyReducer,
    payloadState: payloadReducer
})


export default function reduxStore(){
    return createStore(rootReducer, applyMiddleware(thunk));
}
