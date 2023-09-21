import React from "react";
import Header from "./Header/Header.jsx";
import Promo from "./Promo/Promo.jsx";
import Item from "./Item/Item.jsx";

const Preview = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Item />
      </main>
    </>
  );
};

export default Preview;
