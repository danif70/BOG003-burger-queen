import React, { useState, useEffect, Fragment } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
//import { Menus } from "../Menus/Menus";
import "./Mesero.css";
//import { Cards } from "../Cards/Cards";

const Mesero = () => {
  const [dataState, setDataState] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("data.json")
      .then((product) => product.json())
      .then((data) => setDataState(data));
  //.then(data=> console.log("Mesero",data))
  };

  
  return (
    <Fragment>
      <div className="container-waiter vh-100">
        <Header />
        <div className="container-breakfast-menu row row-cols-1 row-cols-md-2 g-4 w-50">
        <BtnMenu data={dataState} />
        </div>   
      </div>
    </Fragment>
  );
};
export { Mesero };
