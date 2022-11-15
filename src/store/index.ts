// redux创建仓库
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import arrStatusReducer from "./arrStatus/reducer";
import numberStatusReducer from "./numberStatus/reducer";

const reducers = combineReducers({
    numberStatusReducer,
    arrStatusReducer
})

// 使用插件redux-dev-tools监测数据变化配置
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

let store = legacy_createStore(reducers, 
    enhancer
);
export default store;

