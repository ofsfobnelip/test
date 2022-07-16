import { combineReducers } from "redux";
import amountReducer from './amountReducer'
import nameReducer from './nameReducer'
const reducers = combineReducers({
    amount: amountReducer,
    name: nameReducer
})
export default reducers