import fullReducer from "./reducer";
import {createStore} from 'redux';
let store = createStore(fullReducer);
export default store;