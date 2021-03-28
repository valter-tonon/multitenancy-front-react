// @flow
import * as React from 'react';
import {Switch, Route} from "react-router-dom";
import routes from "./index";

type Props = {

};
export const AppRouter = (props: Props) => {
    return (
            <Switch>
                {
                    routes.map((route, key) => (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))
                }
            </Switch>
    );
};