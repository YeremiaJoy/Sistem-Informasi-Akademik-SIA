import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import student from "./pages/student";
import major from "./pages/major";
import NavbarComponent from "./component/Navbar/NavbarComponent";



function App() {
  return (
    <BrowserRouter>
      <main>
        <NavbarComponent/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/major" component={major}/>
          <Route path="/student" component={student} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
