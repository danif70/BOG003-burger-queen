import React, { useState, Fragment } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import "./Mesero.css";

const Mesero = () => {
 
  return (
    <Fragment>
      <div className="container-waiter vh-100">
        <Header />
        <BtnMenu  />
      </div>
    </Fragment>
  );
};
export { Mesero };
