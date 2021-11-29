import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Mesero } from "./Componentes/Mesero/Mesero";
import { Historial } from "./Componentes/Historial/Historial";
import { Cocina } from "./Componentes/Cocina/Cocina";
import { Home } from "./Componentes/Home/Home";
import { Error } from "./Componentes/Error/error.jsx"

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/mesero" component={Mesero} />
          <Route path="/historial" component={Historial} />
          <Route path="/cocina" component={Cocina} />
          <Route path="/" exact component={Home} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
