import React from 'react'
import s from './Affair.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    return (
        <div className={s.affair}>
            <span className={s.title}>{`${props.affair.name} in ${props.affair.priority} priority`}</span>

            <SuperButton
                className={s.smallButton}
                onClick={deleteCallback}
            >x</SuperButton>
        </div>
)
}

export default Affair
