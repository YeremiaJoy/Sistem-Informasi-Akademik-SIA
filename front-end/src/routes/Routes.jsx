import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import student from "../pages/student";
import major from "../pages/major";
import SignUp from "../component/SignUp/SignUp"
import SignIn from "../component/Login/SignIn"
import home from "../pages/home";
import AuthApi from "../utils/AuthApi"

function Routes() {
    return (
        <Switch>
            <RouteRegisteration path="/" exact component={home} />
            <RouteProtected path="/major" exact component={major} />
            <RouteProtected path="/student" exact component={student} />
            <RouteRegisteration path="/signin" exact component={SignIn} />
            <RouteRegisteration path="/signup" exact component={SignUp} />
        </Switch>
    );
}

const RouteRegisteration = ({ component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi); 
    return (
    <Route
        {...rest} 
        render={props=> 
            !authApi.auth ? <Component {...props} /> : <Redirect to="/major"/> 
        } 
    />
    );
};

const RouteProtected = ({ component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi); 
    return (
    <Route
        {...rest} 
        render={props => 
            authApi.auth ? <Component {...props} /> : <Redirect to="/signin"/> 
        } 
    />
    );
};

export default Routes;