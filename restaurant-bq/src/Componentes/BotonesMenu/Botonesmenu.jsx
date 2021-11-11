import React, { useState } from "react";
import { Fragment } from "react";
import { Cards } from "../Cards/Cards";

const BtnMenu = ({data}) => {
  const [menu, setMenu] = useState("DESAYUNOS");

  return (
    <Fragment>
      <div className="container-btn-menu">
      <button
          onClick={() => {
            setMenu("DESAYUNOS");
          }}
          className="btn-menu btn btn-outline-warning"
        >
          DESAYUNOS
        </button>
        <button
          onClick={() => {
            setMenu("COMIDAS");
          }}
          className="btn-menu btn btn-outline-warning"
        >
          COMIDAS
        </button>)
         {data
          .filter((data) => data.type === menu)
          .map((item) => (
            <Cards key={item.id} dataProduct={item} />
          ))} 
      </div>
    </Fragment>
  );
};
export { BtnMenu };
