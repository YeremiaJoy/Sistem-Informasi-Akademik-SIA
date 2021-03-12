import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/home" component={Home} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
