import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./component/navbarComponent"
import student from "./pages/student";
import major from "./pages/major";

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavbarComponent />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/student" component={student} exact />
          <Route path="/major" component={major} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
