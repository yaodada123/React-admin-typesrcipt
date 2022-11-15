// 模块化reducer
import HandleNum from "./index";

let reducer = (state = { ...HandleNum.state, },
    action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case HandleNum.add1:
            HandleNum.actions.add1(newState, action);
            break;
    }
    return newState;
}

export default reducer;