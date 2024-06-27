import {combineReducers} from "redux"
import AuthReducer from "./auth/reducer"

const reducer = combineReducers({
    Auth: AuthReducer
})

export default reducer