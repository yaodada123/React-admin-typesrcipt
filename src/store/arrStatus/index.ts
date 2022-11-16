const store = {
    state: {
        arr: [10, 20, 30]
    },
    actions: {
        arrPush(newState: { arr: number[] },
            action: { type: string, val: number }) {
            newState.arr.push(action.val)
        },

    },
    asyncActions: {
        asyncAdd(dispatch:Function) {
            setTimeout(()=> {
                dispatch({type: "arrPush"})
            }, 2000)
        }
    },
    // 方法名统一管理
    actionName: {
    }

}

let actionName = {};
for (let key in store.actions) {
    actionName[key] = key;
}
store.actionName = actionName;
export default store;