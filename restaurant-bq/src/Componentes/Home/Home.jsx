import React, { Fragment } from "react";
import './Home.css'
import Logo from '../Imagenes/logo.png'

const Home = () => {
  return (
    <Fragment>
      <div className="container-home">
        <img src={Logo}/>
        <div>
          <a href="/mesero">MESERO</a>
          <a href="/cocina">JEFE DE COCINA</a>
        </div>
      </div>
    </Fragment>
  );
};
export { Home };
