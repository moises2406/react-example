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
import DiasDeLaSemana from "./Components/DiasDeLaSemana";

function App() {
  return (
    <div>
      <Router>
        <Navegasiones/>

        <div className="container">
          <Route path='/react-example' exact component={Viernes} />
          <Route path='/react-example/:id'component={Viernes} />
          <Route path="/Lunes" component={Lunes} />
          <Route path="/Sabados" component={Sabados} />
          <Route path="/Datos" component={Datos} />
          <Route path="/Datos/:id" component={Datos} />
          <Route path="/Dias" component={DiasDeLaSemana} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
