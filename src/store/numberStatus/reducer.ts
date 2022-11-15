// 模块化reducer
import HandleNum from "./index";

let reducer = (state = { ...HandleNum.state, },
    action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));
    for(let key in HandleNum.actionsNames) {
        if(action.type === HandleNum.actionsNames[key]) {
            HandleNum.actions[HandleNum.actionsNames[key]](newState, action)
        }
    }
    return newState;
}

export default reducer;