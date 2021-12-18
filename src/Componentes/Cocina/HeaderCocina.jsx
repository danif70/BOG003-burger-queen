import React, { Fragment } from 'react';
import Logo from '../Imagenes/logo.png'
import HomeImg from '../Imagenes/casa.png'
import "../Styles/Header.css"

const HeaderCooker = () => {
  return (
    <Fragment>
      <header className="container-hdr vw-100">
        <img className="logo-hdr" src={Logo} />
        <div className="icons-container">
        <a className="a-add " href="/"><img className="little-house" src={ HomeImg } /></a>
        </div>
      </header>
    </Fragment>
  )
}
export { HeaderCooker }