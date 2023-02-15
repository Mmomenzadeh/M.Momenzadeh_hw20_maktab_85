import {createStore} from "redux"
import formReducer from "./formReducer/formReducer"

export const Store = createStore(formReducer)