const SET_LOADER = 'SET-LOADER'

export type InitialStateType = {
    loader: boolean
}
type LoadingACType = ReturnType<typeof loadingAC>


const initState: InitialStateType = {
    loader: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case SET_LOADER: {
            return {...state, loader: action.payload}
        }
        default:
            return state
    }
}

export const loadingAC = (loader: boolean) => {
    return {type: SET_LOADER, payload: loader} as const
} // fix any