import { RootStateOrAny, useDispatch, useSelector } from "react-redux";



const view = () => {
    // 获取仓库数据
    let { count, arr } = useSelector((state:RootStateOrAny) => (
        {
            count: state.numberStatusReducer.num,
            arr: state.arrStatusReducer.arr
        }
    ))

    // 修改仓库数据
    let dispatch =  useDispatch();
    const btnClick = () => {
        dispatch({type: "add1"})
    }
    const changeArrClick = () => {
        dispatch({type: "arrPush", val: 22})
    }
    return (
        <div>
            这是page1
            <br />
            {count}
            <br />
            <button onClick={btnClick}>点击</button>
            <br />
            {arr}
            <br />
            <button onClick={changeArrClick}>点击改变数组</button>
        </div>
    )
}

export default view;