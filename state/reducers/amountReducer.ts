const reducer:any = (state = 0, action:{type:string,payLoad:number}) => {
    if (action.type === "withdraw") {
        return state - action.payLoad
    }
    else if (action.type === "deposit") {
        return state + action.payLoad
    }
    else {
        return state
    }
}
export default reducer