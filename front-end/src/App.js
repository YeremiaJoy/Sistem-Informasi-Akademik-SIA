import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes'
import AuthApi from "./utils/AuthApi"

function App() {

  const [auth, setAuth] = useState(false)
  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes />
      </Router>
    </AuthApi.Provider>
  );
}

export default App;
