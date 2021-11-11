import React, { useState } from "react";
import  { Fragment } from "react";
import { Menus } from "../Menus/Menu";
//import { LunchMenu } from "../Menus/MenuAlmuerzo";

const BtnMenu = () => {
  const [bfMenu, setBfMenu] = useState("DESAYUNOS");
  /* const [lunchMenu, setLunchMenu] = useState(false);
   */
  return (
    <Fragment>
      <div className="container-btn-menu">
        <button onClick={()=>{setBfMenu("DESAYUNOS")}} className="btn-menu btn btn-outline-warning">DESAYUNOS</button>
        <button onClick={()=>{setBfMenu("COMIDAS")}} className="btn-menu btn btn-outline-warning">COMIDAS</button>
     {/* {bfMenu === "DESAYUNOS"?: } */}

      </div>
    </Fragment>
  )
};
export { BtnMenu };
