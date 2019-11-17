import { combineReducers , createStore } from 'redux';
import setName from './reducer/setName';

export const rootReducer = combineReducers({
    setName
})

let store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

export default store;