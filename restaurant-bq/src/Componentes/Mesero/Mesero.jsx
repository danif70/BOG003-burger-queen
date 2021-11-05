import React, { Fragment } from "react";
import { Header } from '../Header/Header';
import "./Mesero.css"

const Mesero = () => {
    return (
        <Fragment>
            <div className="container-waiter vh-100">
                <header><Header /></header>
                <h1>Vista del mesero</h1>
            </div>
        </Fragment>
    );
}
export { Mesero };