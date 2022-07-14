import {InitialStateTypeHW8} from "../HW8";

type HomeWorkReducerType = (state: InitialStateTypeHW8, action: ActionType) => InitialStateTypeHW8

type SortUpAT = ReturnType<typeof SortAC>
type CheckAgeAT = ReturnType<typeof CheckAgeAC>
type ActionType = SortUpAT | CheckAgeAT

export const homeWorkReducer: HomeWorkReducerType = (state, action) => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                const newArr = [...state]
                return newArr.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'down') {
                const newArr = [...state]
                return newArr.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}

export const SortAC = (payload: string) => ({
  type: 'sort',
  payload,
} as const)

export const CheckAgeAC = (payload: number) => ({
    type: 'check',
    payload,
} as const)