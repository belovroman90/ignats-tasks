import React, {useState} from 'react'
import classes from './Clock.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        // stop
    }
    const start = () => {
        // stop()
        setDate(new Date())
        const id: number = window.setInterval(() => {
            setDate(new Date())
            // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date && date.toLocaleTimeString('ru') // fix with date
    const stringDate = date && date.toLocaleDateString('ru') // fix with date

    return (
        <div className={classes.container}>
            <div
                className={classes.stringTime}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            <div className={classes.stringDate}>
                {show && stringDate}
            </div>

            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
