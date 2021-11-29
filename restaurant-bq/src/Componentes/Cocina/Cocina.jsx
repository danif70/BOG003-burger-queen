import React from "react";
import firebaseApp from "../../firebaseConfig";
import {getAuth} from "firebase/auth"
const auth = getAuth(firebaseApp);

const Cocina = () =>{
    return(
        <h1>Vista de la Cocina</h1>
    );
}
export { Cocina };