import React, { Fragment, useState } from "react";


const OrderArchived = ({oneArchived}) => {



  return (
    <Fragment>
     {oneArchived.state === "ARCHIVADO"?
    <div className="container-archived">
         <p>{oneArchived.client} </p> 
         <p>{oneArchived.preparationTime} </p>  
    </div>: "" }
     
        
    </Fragment>
  );
};

export { OrderArchived };
