import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import numStatus from "src/store/numberStatus/index"


const view = () => {
    // 获取仓库数据
    let { count, arr } = useSelector((state: RootStateOrAny) => (
        {
            count: state.numberStatusReducer.num,
            arr: state.arrStatusReducer.arr
        }
    ))

    // 同步修改仓库数据
    let dispatch = useDispatch();
    const btnClick = () => {
        dispatch({ type: "add1" })
    }
    const changeArrClick = () => {
        dispatch({ type: "arrPush", val: 22 })
    }

    // 异步修改仓库数据   异步操作
    const changeNum = () => {
        dispatch(numStatus.asyncActions.asyncAdd)
    }
    return (
        <div>
            这是page1
            <br />
            {count}
            <br />
            <button onClick={btnClick}>同步点击</button> <button onClick={changeNum}>异步点击</button>
            <br />
            {arr}
            <br />
            <button onClick={changeArrClick}>点击改变数组</button>
        </div>
    )
}

export default view;