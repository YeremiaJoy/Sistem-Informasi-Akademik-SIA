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
          <Route path="/" exact component={Home} />
          <Route path="/major" exact component={major}/>
          <Route path="/student" exact component={student} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
