// redux创建仓库
import { combineReducers, legacy_createStore } from "redux";
import arrStatusReducer from "./arrStatus/reducer";
import numberStatusReducer from "./numberStatus/reducer";

const reducers = combineReducers({
    numberStatusReducer,
    arrStatusReducer
})

let store = legacy_createStore(reducers, /* preloadedState, */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

