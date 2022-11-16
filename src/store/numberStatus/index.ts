 const store = {
    state: {
        num: 10,
    },
    actions: {
        add1(newState:{num: number}, action:{type:string}) {
            newState.num++;
        },
    },
    asyncActions: { // 这是异步方法
        asyncAdd(dispatch: Function) {
            setTimeout(() => {
                dispatch({type: "add1"})
            }, 2000)
        }
    },
    // 方法名统一管理
    actionsNames: {},
}
let actionsNames = {};
for(let key in store.actions) {
    actionsNames[key] = key;
}
store.actionsNames = actionsNames;
export default store;