import React, {ChangeEvent, useState} from 'react'
import s from './GreetingContainer.module.css'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('');
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        name.trim() !== '' && addUserCallback(name);
        name.trim() !== '' && alert(`Hello  ${name}!`); // need to fix;
        name.trim() === '' && setError('Write anyone symbol');
        setName('');
    }

    console.log(users);

    const totalUsers = users.length // need to fix

    return (
        <div className={s.main}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
