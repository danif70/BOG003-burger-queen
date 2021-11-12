import React, { useState, useEffect, Fragment } from 'react';
import { Header } from '../Header/Header';
import { BtnMenu } from '../BtnMenu/Btnmenu';
import { Cards } from '../Cards/Cards';
import './Mesero.css';

const Mesero = () => {
  const [dataState, setDataState] = useState([]);
  const [menu, setMenu] = useState('DESAYUNOS');

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch('data.json')
      .then((product) => product.json())
      .then((data) => setDataState(data));
    //dataState empieza con un arr vacio y en la linea 18 cambia su estado a la data traida con fetch con la funcion setDataState
  };

  return (
    <Fragment>
      <div className='container-waiter vh-100'>
        <Header /> {/*componente hder */}
        <div className='container-menu row row-cols-1 row-cols-md-2 g-4 w-50 overflow-auto'>
          <BtnMenu setMenu={setMenu} />{' '}
          {/* al componente BtnMenu se le pasa el estado({setMenu}) ('DESAYUNOS') a traves de un prop que se le pasa a BtnMenu para cambiar el estado de acuerdo al boton */}
          {dataState
            .filter((products) => products.type === menu)
            .map((item) => (
              <Cards key={item.id} dataProduct={item} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};
export { Mesero };
