import React from 'react';
import { Fragment } from 'react';
import './Btnmenu.css';

const BtnMenu = ({ setMenu }) => {
  return (
    <Fragment>
      <div className='container-btn-menu'>
        <button
          onClick={() => {
            setMenu('DESAYUNOS'); //setMenu en su estado inicializo en mesero
          }}
          className='btn-menu btn btn-outline-warning'
        >
          DESAYUNOS
        </button>
        <button
          onClick={() => {
            setMenu('COMIDAS');
          }}
          className='btn-menu btn btn-outline-warning'
        >
          COMIDAS
        </button>
      </div>
    </Fragment>
  );
};
export { BtnMenu };
