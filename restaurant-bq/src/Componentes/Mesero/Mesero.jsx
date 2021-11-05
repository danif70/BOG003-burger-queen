import React, { Fragment } from "react";
import { Header } from '../Header/Header';
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import { BreakfastMenu } from "../Menus/MenuDesayuno";
import "./Mesero.css"

const Mesero = () => {
    return (
        <Fragment>
            <div className="container-waiter vh-100">
                <Header />
                <BtnMenu />
                <BreakfastMenu />
            </div>
        </Fragment>
    );
}
export { Mesero };