import React, { useState, useEffect } from "react";

const Collections = ({ cart, setCart }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const saveItem = (dataItem) => {
    setCart((prevDataItem) => {
      console.log(cart);
      return [...prevDataItem, dataItem].filter(
        (item, idx, arr) => arr.indexOf(item) === idx
      );
    });
  };

  return (
    <section className="collections">
      <div className="container">
        <div className="collections__wrapper">
          <ul className="collections__list">
            {data?.map((dataItem) => (
              <li key={dataItem.id} className="collections__item">
                <img
                  src={dataItem.image}
                  alt={dataItem.id}
                  className="collections__image"
                />
                <div className="collections__text">
                  <span className="collections__name">{dataItem.title}</span>
                  <button
                    onClick={() => saveItem(dataItem)}
                    className="collections__button"
                  >
                    Buy
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Collections;
