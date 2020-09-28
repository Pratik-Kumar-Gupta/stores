import React, { Component, useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItems] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const item = await data.json();
    setItems(item);
    console.log(item);
  };
  return (
    // <div>
    //   <h2>item {item.id}</h2>
    //   ,<img src={item.image} alt="" />
    // </div>
    <React.Fragment>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 jumbotron">
            <img
              src={item.image}
              width="460"
              height="400"
              className=" img-fluid float-left"
            />
          </div>
          <div className="col-sm-1 m-4"></div>
          <div className="col-sm-6 m-4">
            <h3>{item.title}</h3>
            <h3>
              <span>
                <bold>Rs </bold>
              </span>
              {item.price}
            </h3>
            <h3>
              Item Category: <span>{item.category}</span>
            </h3>
            <h3>Item Description :</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ItemDetails;
