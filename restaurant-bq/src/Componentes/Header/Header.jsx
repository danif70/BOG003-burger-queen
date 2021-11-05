import React, { Fragment } from 'react';
import Logo from '../Imagenes/logo.png'
import AddImg from '../Imagenes/boton-mas.png'
import Bell from '../Imagenes/campana.png'
import HomeImg from '../Imagenes/casa.png'
import "./Header.css"


const Header = () => {
  return (
    <Fragment>
      <header className="container-hdr">
        <img className="logo-hdr" src={Logo} />
        <div className="icons-container">
        <a ><img className="add-sign" src={ AddImg } /></a>
        
          <a ><img className="bell" src={ Bell } /></a>
          <a href="/"><img className="little-house" src={ HomeImg } /></a>
        </div>
      </header>
    </Fragment>
  )
}


export { Header }