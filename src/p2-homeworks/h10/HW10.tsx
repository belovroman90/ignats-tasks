import React from 'react'
import classes from './HW10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";

export function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const state = useSelector<AppStoreType, InitialStateType>(state => state.loading)

    const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div className={classes.container}>
            <hr/>

            {/*should work (должно работать)*/}
            {state.loader
                ? (
                    <div className={classes.preloader}></div>
                ) : (
                    <div className={classes.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>

                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}