import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components


import Navegasiones from "./Components/Navegasiones";
import Sabados from "./Components/Sabados";
import Lunes from "./Components/Lunes";
import Viernes from "./Components/Viernes";
import Datos from "./Components/Datos";

function App() {
  return (
    <div>
      <Router>
        <Navegasiones/>

        <div className="container">
          <Route path="/" component={Viernes} exact />
          <Route path="/Lunes" component={Lunes} />
          <Route path="/Sabados" component={Sabados} />
          <Route path="/Datos" component={Datos} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
