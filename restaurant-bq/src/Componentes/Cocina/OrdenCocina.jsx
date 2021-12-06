import React, { Fragment, useEffect, useState } from "react";
import watch from "../Imagenes/reloj.png";
import "../Styles/OrdenCocina.css";

const OrdenCocina = ({ oneOrder }) => {
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);
  const [chrono, setChrono] =useState([])

  const clock = () => {
    setDiff(new Date(+new Date() - initial));
  };
  const start = () => {
    setInitial(+new Date());
  };

useEffect(()=>{
  const crono = setTimeout(()=>{
    start();
  }, 1000);
  return ()=> clearTimeout(crono);
  }, [])


  useEffect(() => {
    if (initial) {
      requestAnimationFrame(clock);
    }
  }, [initial]);

  useEffect(() => { 
    if (diff) {
      requestAnimationFrame(clock);
    }
  }, [diff]);


  const timeFormat = (date) => {
    if (!date) return "00:00";
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    

    return `${mm}:${ss}`;
  };

  return (
    <Fragment>
      
      <div
        className="cards-cooker text-center col-sm-2 card bg-light mb-3
      overflow-auto"
      >
        <div className="card-header header-cooker">
          <p>{oneOrder.client}</p>
          <p>{oneOrder.numOrder}</p>
        </div>
        <div className="chronometer">
          <img
            className="watch-cooker"
            /* onClick={start} */
            src={watch}
            alt="watch"
          />
         {/*  {setWatch( */}<p className="timer">{timeFormat(diff)}</p>{/* )} */}
        </div>
        <div className="item-qty">
          <ul className="list-order">
            ITEM
            {oneOrder.item.map((item) => (
              <li className="li-items" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="list-order">
            CANTIDAD
            {oneOrder.item.map((qty) => (
              <li className="li-qty" key={qty.id}>
                {qty.qty}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-cards-cooker">
          <button className="btn-card-cooker btn-warning  " type="submit">
            LISTO {/* //aqui se debería llamar al componente de pedidos listos y mandarle como props el estado final del cronómetro ( que aún no he logrado programar🥴), también pensar en hacer el crono en el componente resumen pedido y que se inicie con el enviar pedido, y que su estado pase aquí como props */}
          </button>
        </div>
      </div>
      
    </Fragment>
  );
};

export { OrdenCocina };
