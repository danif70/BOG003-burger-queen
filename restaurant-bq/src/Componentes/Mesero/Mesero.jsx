import React, { useState,Fragment } from "react";
import { Header } from '../Header/Header';
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import { BreakfastMenu } from "../Menus/MenuDesayuno";
import "./Mesero.css"

const Mesero = () => {
    //creamos un props(prueba) que maneja el estado del boton desayuno que inicializa en false, se le pasa al componente <BtnMenu> 
    const [bfMenu, setBfMenu]= useState(false)
    const prueba = () =>{
        setBfMenu(true)
        console.log('prueba botones', bfMenu)
    }
    
    return (
        <Fragment>
            <div className="container-waiter vh-100">
                <Header />
                <BtnMenu prueba={prueba} />
                {/*aquí se maneja el cambio de estado con un operador ternario que pregunta si la variable de estado(bfMenu) es true se llama al componente BreakfastMenu*/}
                {bfMenu?<BreakfastMenu />:''}
                 
            </div>
        </Fragment>
    );
}
export { Mesero };