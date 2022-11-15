// redux创建仓库
import { legacy_createStore } from "redux";
import reducer from "./reducer";

let store = legacy_createStore(reducer, /* preloadedState, */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

