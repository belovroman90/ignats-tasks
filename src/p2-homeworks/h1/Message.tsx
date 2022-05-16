import React from 'react';
import s from "./Message.module.css";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.tail}>
                <img className={s.avatar} src={props.avatar} alt="avatar"/>
            </div>
            <div className={`${s.message_content} ${s.message_content_2}`}>

                <p className={s.message_name}>{props.name}</p>
                <p className={s.message_text}>{props.message}</p>
                <p className={s.message_time}>{props.time}</p>

            </div>

        </div>
    )
}

export default Message
