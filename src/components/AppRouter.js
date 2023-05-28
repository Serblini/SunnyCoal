import React, {useContext} from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom'

import {authRoutes, publicRoutes} from "../data/routes";
import {CAFE_ROUTE} from "../utils/consts";
import { ABOUT_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import Hbut from "../components/Hbut"
import About from "../components/About"
const AppRouter = observer(() => {
    // const {user} = useContext(Context)
    const isAuth = false
    // console.log(user)
    return (
        //    <Router>
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
             <Route path={ABOUT_ROUTE} component={About} exact />
            <Redirect to={CAFE_ROUTE}/>
        </Switch>
        // </Router>
    );
});

export default AppRouter;
