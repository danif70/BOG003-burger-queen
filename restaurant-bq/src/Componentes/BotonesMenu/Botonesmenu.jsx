import React, { useState } from "react";
import  { Fragment } from "react";
//import { BreakfastMenu } from '../Menus/MenuDesayuno';

//la función recibe el props(prueba) y se le pasa el evento del botón desayuno
const BtnMenu = ({prueba}) => {
  


  return (
    <Fragment>
      <div className="container-btn-menu">
        <button onClick={prueba} className="btn-menu btn btn-outline-warning">DESAYUNOS</button>
        <button className="btn-menu btn btn-outline-warning">COMIDAS</button>
      </div>
    </Fragment>
  )
};
export { BtnMenu };
