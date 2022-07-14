import React from 'react'
import {CheckAgeAC, homeWorkReducer, SortAC} from '../homeWorkReducer'
import {InitialStateTypeHW8} from "../../HW8";

let initialState: InitialStateTypeHW8 // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'c', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortAC('up'))
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Дмитрий')
    // expect(...).toBe(...)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortAC('down'))
    expect(newState[1].name).toBe('Коля')
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAgeAC(18))
    expect(newState.length).toBe(4)
})
