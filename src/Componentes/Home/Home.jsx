import React, { Fragment } from "react";
import '../Styles/Home.css'
import Logo from '../Imagenes/logo.png'

const Home = () => {
  return (
    <Fragment>
      <div className="container-home vh-100">
        <img className="logo-home rounded mx-auto d-block" src={Logo}/>
        <div className="home-container-buttons">
          <a className="home-buttons btn btn-outline-warning" href="/mesero">MESERO</a>
          <a className="home-buttons btn btn-outline-warning" href="/cocina">JEFE DE COCINA</a>
        </div>
      </div>
    </Fragment>
  );
};
export { Home };
