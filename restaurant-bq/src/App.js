import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Mesero } from "./Componentes/Mesero/Mesero";
import { Historial } from "./Componentes/Historial/Historial";
import { Cocina } from "./Componentes/Cocina/Cocina";
import { Opciones } from "./Componentes/Opciones/Opciones";
import { Home } from "./Componentes/Home/Home";
import { Errors } from "./Componentes/Error/error.jsx"

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/mesero" component={Mesero} />
          <Route path="/historial" component={Historial} />
          <Route path="/cocina" component={Cocina} />
          <Route path="/opciones" component={Opciones} />
          <Route path="/" exact component={Home} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
