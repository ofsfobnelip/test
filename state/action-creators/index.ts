export const Withdaraw = (amount: number) => {
    return (dispatch: Function) => {
        dispatch({
            type: "withdraw",
            payLoad: amount
        })
    }
}
export const Deplosit = (amount: number) => {
    return (dispatch: Function) => {
        dispatch({
            type: "deposit",
            payLoad: amount
        })
    }
}