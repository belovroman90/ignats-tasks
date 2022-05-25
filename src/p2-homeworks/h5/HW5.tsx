import React from 'react'
import Header from './Header'
import RoutesComponent from './RoutesComponent'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <BrowserRouter>

                <Header/>

                <RoutesComponent/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
