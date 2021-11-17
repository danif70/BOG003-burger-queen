import React, { useState, useEffect, Fragment } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "./Btnmenu";
import { Cards } from "./Cards";
import { ResumenPedido } from "./ResumenPedido";
//import { CardButton } from './CardButton';
import "../Styles/Mesero.css";

const Mesero = () => {
  const [dataState, setDataState] = useState([]);
  const [menu, setMenu] = useState("DESAYUNOS");
  const [order, setOrder] = useState([]);
  // const [subMenu, setSubMenu] = useState("Burger");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("data.json")
      .then((products) => products.json())
      .then((data) => setDataState(data));
    //dataState empieza con un arr vacio y en la linea 18 cambia su estado a la data traida con fetch con la funcion setDataState
  };

  const onAdd = (product) => {
    //exist busca que el producto exista en el resumen y para eso trata de encontrar que el id del articulo sea igual al id de product
    const exist = order.find((el) => el.id === product.id);
    if (exist) {
      setOrder(
        order.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
        )
      );
      console.log(exist);
    } else {
      setOrder([...order, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    //exist busca que el producto exista en el resumen y para eso trata de encontrar que el id del articulo sea igual al id de product
    const exist = order.find((el) => el.id === product.id);
    if (exist.qty === 1) {
      setOrder(order.filter((el) => el.id !== product.id));
    } else {
      setOrder(
        order.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
        )
      );
    }
  };

  return (
    <Fragment>
      <div className="container-waiter vh-100 ">
        <Header /> {/*componente hder */}
        <BtnMenu setMenu={setMenu} />
        <div className="container-menu overflow-auto row row-cols-1 row-cols-md-2 g-4  overflow-auto">
          {/* al componente BtnMenu se le pasa el estado({setMenu}) ('DESAYUNOS') a traves de un prop que se le pasa a BtnMenu para cambiar el estado de acuerdo al boton */}
          {dataState
            .filter((products) => products.type === menu)
            .map((item) => (
              <Cards
                key={item.id}
                dataProduct={item}
                setOrder={setOrder}
                order={order}
                onAdd={onAdd}
                // subMenu={subMenu}
                // setSubMenu={dataState}
              />
            ))}
        </div>
        <div className="container-order">
          <ResumenPedido onAdd={onAdd} onRemove={onRemove} order={order} />
        </div>
      </div>
    </Fragment>
  );
};
export { Mesero };
