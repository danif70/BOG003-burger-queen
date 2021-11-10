import React, { useState } from "react";
import  { Fragment } from "react";
import { BreakfastMenu } from "../Menus/MenuDesayuno";
import { LunchMenu } from "../Menus/MenuAlmuerzo";

const BtnMenu = () => {
  const [bfMenu, setBfMenu] = useState("DESAYUNOS");
  /* const [lunchMenu, setLunchMenu] = useState(false);
   */
  return (
    <Fragment>
      <div className="container-btn-menu">
        <button onClick={()=>{setBfMenu("DESAYUNOS")}} className="btn-menu btn btn-outline-warning">DESAYUNOS</button>
       {/*  {bfMenu?<BreakfastMenu />:""}  */}
        <button onClick={()=>{setBfMenu("COMIDAS")}} className="btn-menu btn btn-outline-warning">COMIDAS</button>
        {/* {lunchMenu?<LunchMenu />:""}  */}
      {bfMenu === "DESAYUNOS"?<BreakfastMenu />: <LunchMenu />}

      </div>
    </Fragment>
  )
};
export { BtnMenu };
