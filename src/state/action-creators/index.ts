export const Withdaraw = (amount: number) => {
    return {
        type: "withdraw",
        payLoad: amount
    }
}
export const Deplosit = (amount: number) => {
    return {
        type: "deposit",
        payLoad: amount
    }
}
export const ChangeName = (name: string) => {
    return {
        type: "update_name",
        payLoad: name
    }
}