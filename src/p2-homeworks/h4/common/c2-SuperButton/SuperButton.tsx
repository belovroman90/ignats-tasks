import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    deleteAffair?: () => void
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    let finalClassName = className ? className : s.default;
    if (red) {
        finalClassName = `${s.default} ${s.red}`;
    }
    if (restProps.disabled) {
        finalClassName = `${s.default} ${s.disabled}`;
    }

    return (
        <button
            className={finalClassName}

            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
