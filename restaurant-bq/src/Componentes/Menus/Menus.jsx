import React, { useEffect, useState } from 'react';
import { Mesero } from "../Mesero/Mesero";
import './MenuDesayuno.css'

//import capuccino from '../Imagenes/capuccino.png'

const Menus = (dataproduct) => {
    console.log(dataproduct);

    return (
        <section className="container-breakfast-menu row row-cols-1 row-cols-md-2 g-4 w-50">
        
           {/*  {
                data.filter((data) => data.type=== "DESAYUNOS").map((item)=>(
                    <div key={item.id}>
                        <div className="card text-center col-sm-8 card bg-light mb-3 w-100" >
                        <div className="card-header" >{item.type}</div>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                            <img src={item.img}></img>
                            <button className="btn btn-warning w-50 " type="submit">AGREGAR</button>
                        </div> 
                        </div> 
                        
                    </div>       
                ))
            } */}
        </section>
        
    )
}

export { Menus };

