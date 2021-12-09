import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import "../Styles/Historial.css";
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot,orderBy } from "firebase/firestore";

const Historial = () =>{
    const [stateHistorial, setStateHistorial] = useState([]);
   
    const getCollection = () => {
        const docSnap = query(collection(db, "orders"));
        onSnapshot(docSnap, (snapshot) => {
          setStateHistorial(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
                    
        });
        };
      useEffect(() => {
        getCollection();
      }, []);


    return(
        <Fragment>
            <div>
                <Header/>
            </div>
            <div>
                {stateHistorial.map((oneHistorial)=>(
                    <div>
        
                    <p>{oneHistorial.client}</p>
                    <p>{oneHistorial.numOrder}</p>
                    <p>{oneHistorial.dateInitial}</p>
                    <p>{oneHistorial.state}</p>                    
                    
                  </div>
                ))}
            </div>
        </Fragment>
    );
}
export { Historial };