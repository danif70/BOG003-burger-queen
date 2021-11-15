import React, { useState } from "react";
import  { Fragment } from "react";
import { Menus } from "../Menus/Menus";

/* import { LunchMenu } from "../Menus/MenuAlmuerzo"; */

const BtnMenu = (data) => {

  //console.log(data.type);
  const [menu, setMenu] = useState("DESAYUNOS");
  /* const [lunchMenu, setLunchMenu] = useState(false);
   */
  return (
    <Fragment>
      <div className="container-btn-menu">
        <button onClick={()=>{setMenu("DESAYUNOS")}} className="btn-menu btn btn-outline-warning">DESAYUNOS</button>
       {/*  {bfMenu?<BreakfastMenu />:""}  */}
        <button onClick={()=>{setMenu("COMIDAS")}} className="btn-menu btn btn-outline-warning">COMIDAS</button>
        {/* {lunchMenu?<LunchMenu />:""}  */}
      {menu === "DESAYUNOS"?<Menus />: "Hola" }

      </div>
    </Fragment>
  )
};
export { BtnMenu };
