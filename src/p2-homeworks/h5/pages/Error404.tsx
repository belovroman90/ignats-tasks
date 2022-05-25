import React from 'react'
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div>
            <p>This page not found. Return to <NavLink to={'/'}>Home</NavLink> page.</p>
        </div>
    )
}

export default Error404
