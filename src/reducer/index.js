import reducer from './main-reducer';
import {reducer as formReducer} from 'redux-form';
import {combineReducers} from "redux";

let fullReducer = combineReducers({
    form: formReducer,
    reducer
});

export default fullReducer;
