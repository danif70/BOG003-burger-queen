import React from "react";
import  { Fragment } from "react";

const BtnMenu = () => {
  return (
    <Fragment>
      <div className="container-btn-menu">
        <button className="btn-menu btn btn-outline-warning">DESAYUNOS</button>
        <button className="btn-menu btn btn-outline-warning">COMIDAS</button>
      </div>
    </Fragment>
  )
};
export { BtnMenu };
