import React, { useState, useEffect, Fragment } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import { Menus } from "../Menus/Menus";
import "./Mesero.css";

const Mesero = () => {
  const [dataState, setDataState] = useState([]);
 
    useEffect(() => {
      getProduct();
  }, [])

  const getProduct = () => {
      fetch("data2.json")
        .then(product => product.json())
        .then(data => setDataState(data))
        //.then(dataState=> console.log("Mesero",dataState))
  }
 
   return (
    <Fragment>
      <div className="container-waiter vh-100">
        <Header />
        <BtnMenu data = {setDataState} />
        </div>
        {
                dataState.map((item,index)=>(
                    <div key={item.id}>
                      <div >{item.type}</div>
                    </div>       
                ))
            }
    </Fragment>
  );
};
export { Mesero };
