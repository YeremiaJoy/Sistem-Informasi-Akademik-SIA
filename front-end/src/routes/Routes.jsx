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
            {/* Dashboard */}
            <RouteRegisteration exact path="/" component={home} />
            <RouteProtected path="/major" component={major} />
            <RouteProtected path="/student" component={student} />  

            {/* Profile */}

            {/* Auth */}
            <RouteRegisteration path="/signin" component={SignIn} />
            <RouteRegisteration path="/signup" component={SignUp} />
            {/* <Route path="/signup" component={ForgotPassword} /> */}
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