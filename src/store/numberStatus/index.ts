export default {
    state: {
        num: 10,
    },
    actions: {
        add1(newState:{num: number}, action:{type:string}) {
            newState.num++;
        },
    },
    // 方法名统一管理
    add1: "add1"
}