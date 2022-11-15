 const store = {
    state: {
        num: 10,
    },
    actions: {
        add1(newState:{num: number}, action:{type:string}) {
            newState.num++;
        },
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