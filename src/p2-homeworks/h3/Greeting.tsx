import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.main}>
            <div className={s.container}>
                <span className={s.title}>{error ? error : "Enter your Name"}</span>
                <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.input}`} placeholder={'Your Name'}/>
                <span className={error ? s.countError : s.count}>{totalUsers}</span>
                <button onClick={addUser} className={s.button}>add</button>
            </div>
        </div>
    )
}

export default Greeting
