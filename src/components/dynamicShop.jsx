import { wait } from "@testing-library/react";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DynamicShop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setItems(items);
    console.log(items);
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h2>Shopping Items</h2>
        <p>Details of Shopping items:</p>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items) => (
              <tr>
                <Link key={items.id} to={`/dynamicshop/${items.id}`}>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      view item
                    </button>
                  </td>
                </Link>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>{items.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default DynamicShop;
