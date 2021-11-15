import React, { useState, useEffect, Fragment } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import { Menus } from "../Menus/Menus";
import "./Mesero.css";

const Mesero = () => {
  const [dataState, setDataState] = useState([]);
  const [menu, setMenu] = useState("DESAYUNO");

   useEffect(() => {
      getProduct();
  }, [])

  const getProduct = () => {
     fetch("data2.json")
        .then(product => product.json())
        .then(data => setDataState(data)) 
        /* .then(dataState=> console.log("Mesero",dataState))  */
  } 
  
   return (
    <Fragment>
      <div className="container-waiter vh-100">
        <Header />
        <BtnMenu setMenu={setMenu} />
        <div>
        {
          dataState
          /* .filter((products)=>products.type === menu) */
          .map((product,id)=>(
            <p key={product.id} />
            ))

        }
    </div>    
       
      
         
        </div>
      
        
    </Fragment>
  );
};
export { Mesero };
