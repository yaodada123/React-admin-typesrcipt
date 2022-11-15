// 模块化reducer
import HandleArr from "./index";

let reducer = (state = {...HandleArr.state},
    action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case HandleArr.arrPush:
            HandleArr.actions.arrPush(newState,action);
            break;
    }
    return newState;
}

export default reducer;