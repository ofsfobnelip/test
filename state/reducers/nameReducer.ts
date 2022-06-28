const reducer = (state = "", action: { type: string, payLoad: number }) => {
    switch (action.type) {
        case "update_name":
            return action.payLoad
        default:
            return state
    }
}
export default reducer