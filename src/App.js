import React, { Component } from "react";
import Navbar from "./components/navbar";
import HomeComp from "./components/homeComp";
import DesComp from "./components/desComp";

class App extends Component {
  state = {
    shopping_items: [
      {
        id: 1,
        value: 0,
        p_name: "Painting 1",
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 2,
        value: 0,
        p_name: "Painting 2",
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 3,
        value: 0,
        p_name: "Painting 3",
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 4,
        value: 0,
        p_name: "Painting 4",
        imageUrl: "https://picsum.photos/200",
      },
    ],
  };
  handleIncrement = (counter) => {
    const shopping_items = [...this.state.shopping_items];
    const index = shopping_items.indexOf(counter);
    shopping_items[index] = { ...counter };
    shopping_items[index].value++;
    console.log(this.state.shopping_items[index]);
    this.setState({ shopping_items });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalcounters={
            this.state.shopping_items.filter((c) => c.value > 0).length
          }
        />
        <div className="container-fluid" style={{ marginTop: "30px" }}>
          <div className="col-sm-12">
            <HomeComp
              shopping_items={this.state.shopping_items}
              onIncrement={this.handleIncrement}
            />
          </div>
        </div>
        <DesComp />
      </React.Fragment>
    );
  }
}

export default App;
