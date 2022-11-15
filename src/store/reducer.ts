import HandleNum from "./numberStatus/index";
import HandleArr from "./arrStatus/index";
const defaultStore = {
    ...HandleNum.state,
    ...HandleArr.state,
}

let reducer = (state = defaultStore,
    action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case HandleNum.add1:
            HandleNum.actions.add1(newState, action);
            break;
        case HandleArr.arrPush:
            HandleArr.actions.arrPush(newState,action);

    }
    return newState;
}

export default reducer;