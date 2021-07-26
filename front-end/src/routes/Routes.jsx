import React from "react";
import { Switch, Route } from "react-router-dom";
import student from "../pages/student";
import major from "../pages/major";
// import SignUp from "../component/SignUp/SignUp"
// import SignIn from "../component/Login/SignIn"
import home from "../pages/home";
import teacher from "../pages/teacher";
import Course from "../pages/course";
import LoginStudent from "../component/Login/LoginStudent";
import LoginTeacher from "../component/Login/LoginTeacher";
// import AuthApi from "../utils/AuthApi"

function Routes() {
  return (
    <Switch>
      {/* Dashboard */}
      {/* <RouteRegisteration exact path="/" component={home} />
            <RouteProtected path="/major" component={major} />
            <RouteProtected path="/student" component={student} />   */}
      <Route exact path="/" component={home}></Route>
      <Route exact path="/major" component={major}></Route>
      <Route exact path="/student" component={student}></Route>
      <Route exact path="/teacher" component={teacher}></Route>
      <Route exact path="/course" component={Course}></Route>
      <Route exact path="/loginStudent" component={LoginStudent}></Route>
      <Route exact path="/loginTeacher" component={LoginTeacher}></Route>

      {/* Profile */}

      {/* Auth */}
      {/* <RouteRegisteration path="/signin" component={SignIn} />
            <RouteRegisteration path="/signup" component={SignUp} /> */}
      {/* <Route path="/signup" component={ForgotPassword} /> */}
    </Switch>
  );
}

// const RouteRegisteration = ({ component: Component, ...rest}) => {
//     const authApi = React.useContext(AuthApi);
//     return (
//     <Route
//         {...rest}
//         render={props=>
//             !authApi.auth ? <Component {...props} /> : <Redirect to="/major"/>
//         }
//     />
//     );
// };

// const RouteProtected = ({ component: Component, ...rest}) => {
//     const authApi = React.useContext(AuthApi);
//     return (
//     <Route
//         {...rest}
//         render={props =>
//             authApi.auth ? <Component {...props} /> : <Redirect to="/signin"/>
//         }
//     />
//     );
// };

export default Routes;
