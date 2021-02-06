import { createStore, combineReducers } from 'redux'; 
import rootReducer from '../reducers/' 

function storeConfig(){
    return createStore(rootReducer)
}

export default storeConfig
