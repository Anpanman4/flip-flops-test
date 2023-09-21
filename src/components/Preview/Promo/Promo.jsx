import React, { useEffect, useState } from "react";
import "./Promo.scss";

const Promo = () => {
  const [time, setTime] = useState(17476);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <section className="promo">
      <div className="promo__container promo__container_left">
        <p className="promo__text promo__text1">LIMITED OFFER</p>
        <p className="promo__text promo__text2">{`0${Math.trunc(time / 3600)}:${Math.trunc((time % 3600) / 60)}:${
          time % 60
        }`}</p>
      </div>
      <div className="promo__container promo__container_right">
        <p className="promo__text promo__text3">R 250.00</p>
        <p className="promo__text promo__text4">R 160.00</p>
      </div>
    </section>
  );
};

export default Promo;
