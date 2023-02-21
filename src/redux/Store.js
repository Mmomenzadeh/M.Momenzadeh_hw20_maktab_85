import {createStore} from "redux"
import formReducer from "./formReducer/formReducer"

export const Store = createStore(formReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())