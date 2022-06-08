import React, {useState} from 'react'
import s from './HW6.module.css'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

export function HW6() {
    const [value, setValue] = useState<string>(restoreState('editable-span-value', ''))

    const save = () => {
        saveState<string>('editable-span-value', value)
    }

    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            <div className={s.container}>
                {/*should work (должно работать)*/}
                <div className={s.span}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <div className={s.buttons}>
                    <SuperButton
                        className={s.saveButton}
                        onClick={save}
                    >save</SuperButton>
                    <SuperButton
                        onClick={restore}
                    >restore</SuperButton>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}