import React, {useState} from 'react'
import {CheckAgeAC, homeWorkReducer, SortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

// export type UserType =

type ManType = {
    _id: number
    name: string
    age: number
}
export type InitialStateTypeHW8 = Array<ManType>

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export function HW8() {
    const [people, setPeople] = useState<InitialStateTypeHW8>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: ManType) => (
        <div key={p._id}>
            {`${p.name} — ${p.age}`}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortAC('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, CheckAgeAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.main}>
                <div className={s.list}>
                    {finalPeople}
                </div>

                <div className={s.buttons}>
                    <SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton>
                    <SuperButton className={s.button} onClick={sortDown}>sort down</SuperButton>
                </div>
                <div className={s.check18}>
                    <SuperButton className={s.button} onClick={check}>check 18</SuperButton>
                </div>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}
