const reducer: any = (state = 12, action: { type: string, payLoad: number }) => {
    switch (action.type) {
        case "withdraw":
            if (state - action.payLoad < 0)
                return state
            else
                return state - action.payLoad
        case "deposit":
            return state + action.payLoad
        default:
            return state
    }
}
export default reducer