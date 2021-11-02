import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Mesero } from "./Componentes/Mesero/Mesero";
import { Historial } from "./Componentes/Historial/Historial";
import { Cocina } from "./Componentes/Cocina/Cocina";
import { Opciones } from "./Componentes/Opciones/Opciones";
import { Home } from "./Componentes/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/mesero">
            <Mesero />
          </Route>
          <Route path="/historial">
            <Historial />
          </Route>
          <Route path="/cocina">
            <Cocina />
          </Route>
          <Route path="/opciones">
            <Opciones />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
