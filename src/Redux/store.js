import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {Reducer as Cart_reducer} from "./Prod_redux/reducer";
import thunk from 'redux-thunk'
const Rootreducer = combineReducers({
    cart:Cart_reducer,
    
})

const store = legacy_createStore(Rootreducer,applyMiddleware(thunk))

export default store