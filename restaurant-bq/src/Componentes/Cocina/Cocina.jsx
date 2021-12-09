import React, { Fragment, useEffect, useState } from "react";
import { HeaderCooker } from "./HeaderCocina";
import "../Styles/Cocina.css";
import { OrdenCocina } from "./OrdenCocina"
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot,orderBy } from "firebase/firestore";


const Cocina = () => {
  const [stateOrder, setstateOrder] = useState([]);
  //const [estado,setEstado] = useState ("En cocina");

  const getCollection = () => {
    const docSnap = query(collection(db, "orders"), orderBy("dateInitial","desc"));
    onSnapshot(docSnap, (snapshot) => {
      setstateOrder(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      
      //console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
   
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <Fragment>
      <div className="container-cooker vh-100 ">
      <div>
        <HeaderCooker className="hder-cooker" />
      </div>
      <div className="container-card-cooker overflow-auto row row-cols-1 row-cols-md-2 g-4 overflow-auto">
          {stateOrder.map((oneOrder) => (
           
            <OrdenCocina
             key={oneOrder.id}
              oneOrder = {oneOrder}              
            />
            
          
          ))}
          </div>
        </div>
    </Fragment>
  );
};

export { Cocina };
