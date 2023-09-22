import { useState } from "react";
import "./Item.scss";

import title from "../../../images/title.svg";
import black from "../../../images/black.jpg";
import orange from "../../../images/orange.jpg";
import pink from "../../../images/pink.jpg";
import yellow from "../../../images/yellow.jpg";
import star from "../../../images/star.svg";
import arrow from "../../../images/arrow.svg";

const images = [
  {
    id: 1,
    src: black,
  },
  {
    id: 2,
    src: orange,
  },
  {
    id: 3,
    src: pink,
  },
  {
    id: 4,
    src: yellow,
  },
];

const colorVariables = [
  { id: 1, color: "BLACK" },
  { id: 2, color: "ORANGE" },
  { id: 3, color: "PINK" },
  { id: 4, color: "YELLOW" },
];
const sizeVariables = [
  { id: 1, size: 2 },
  { id: 2, size: 3 },
  { id: 3, size: 4 },
  { id: 4, size: 5 },
];

const Item = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentColor, setCurrentColor] = useState("BLACK");
  const [currentSize, setCurrentSize] = useState(2);
  const [isColorClicked, setIsColorClicked] = useState(false);
  const [isSizeClicked, setIsSizeClicked] = useState(false);

  return (
    <section className="item">
      <div className="item__container">
        <p className="item__mark">Excellent 4.8/5</p>
        <img className="item__mini-title" src={title} alt="Trustpilot" />
        <p className="item__text">best selling</p>
      </div>
      <h2 className="item__title">ORTHOPEDIC SLIPPERS</h2>
      <img className="item__image-container" src={images[currentItem].src} alt="Шлепки" />
      <div className="item__boots-container">
        {images.map(image => {
          return (
            <img
              className="item__boots"
              key={image.id}
              src={image.src}
              alt="Шлепки"
              onClick={() => setCurrentItem(image.id - 1)}
            />
          );
        })}
      </div>
      <div className="item__text-container">
        <p className="item__text">
          <span className="item__text item__text_bold">Fast Delivery: </span>2-4 days from SA &#127487;&#127462;
        </p>
        <p className="item__text">
          <span className="item__text item__text_bold">In Stock: </span>Shipping from Johannesburg &#127487;&#127462;
        </p>
        <p className="item__text">
          {"a"
            .repeat(5)
            .split("")
            .map((item, index) => {
              return <img key={index} className="item_star" src={star} alt="" />;
            })}{" "}
          (10)
        </p>
      </div>
      <div className="item__filter-container">
        <div className="item__filter">
          <p className="item__pretitle">color</p>
          <div className="item__select-button" onClick={() => setIsColorClicked(!isColorClicked)}>
            {currentColor}
            <img className={`item__arrow ${isColorClicked ? "" : "item__arrow_reversed"}`} src={arrow} alt="стрелка" />
            <div className="item__variables">
              {isColorClicked
                ? colorVariables.map(item => {
                    return (
                      <p key={item.id} className="item__variable" onClick={() => setCurrentColor(item.color)}>
                        {item.color}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <div className="item__filter">
          <p className="item__pretitle">size</p>
          <div className="item__select-button" onClick={() => setIsSizeClicked(!isSizeClicked)}>
            {currentSize}
            <img className={`item__arrow ${isSizeClicked ? "" : "item__arrow_reversed"}`} src={arrow} alt="стрелка" />
            <div className="item__variables">
              {isSizeClicked
                ? sizeVariables.map(item => {
                    return (
                      <p key={item.id} className="item__variable" onClick={() => setCurrentSize(item.size)}>
                        {item.size}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
      <button className="item__button">BUY NOW</button>
    </section>
  );
};

export default Item;
