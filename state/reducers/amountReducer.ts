const reducer: any = (state = 0, action: { type: string, payLoad: number }) => {
    switch (action.type) {
        case "withdraw":
            return state - action.payLoad
        case "deposit":
            return state + action.payLoad
        default:
            return state
    }
}
export default reducer