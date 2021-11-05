import React, { Fragment } from "react";
import './Home.css'
import Logo from '../Imagenes/logo.png'

const Home = () => {
  return (
    <Fragment>
      <div className="container-home">
        <img className="logo-home" src={Logo}/>
        <div className="home-container-buttons">
          <a className="home-buttons" href="/mesero">MESERO</a>
          <a className="home-buttons" href="/cocina">JEFE DE COCINA</a>
        </div>
      </div>
    </Fragment>
  );
};
export { Home };
