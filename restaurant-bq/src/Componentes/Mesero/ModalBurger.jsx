import React, { Fragment } from "react";
import "../Styles/ModalBurger.css"


const ModalBurger = ({modal, dataModal}) => {
console.log(dataModal);

  return (
    <Fragment>
      {modal ? (
      <div  className="container-modal" >
        <p>{dataModal.name}</p>
        {dataModal.protein.map(item => (item))}
        <p>EXTRAS</p>
      </div>) : (null)}
      
    </Fragment>
  );
};
export { ModalBurger };