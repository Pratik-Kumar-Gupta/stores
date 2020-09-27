import React, { Component } from "react";
import Navbar from "./components/navbar";
import HomeComp from "./components/homeComp";
import DescComp from "./components/desComp";
import Profile from "./components/profileComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    console.log("new shopping array", shopping_items);
    const index = shopping_items.indexOf(counter);
    console.log("index of clicked item", index);
    shopping_items[index] = { ...counter };
    shopping_items[index].value++;
    this.setState({ shopping_items });
    // counter contains the item details clicked [add item button] in homeCompinet
    // copy the the shopping_items array to a new array as below
    // get the index value of the item clicked in homecomp from counter
    //console.log("copy shopping_items[index] from counter", { ...counter });
    //console.log("shopping index ", shopping_items[index]);
    // console.log("incremented value", shopping_items[index].value++);
    // console.log(this.state.shopping_items[index]);
  };
  handleDecrement = (item_id) => {
    console.log("item id to be deleted", item_id);
    //const counters = this.state.counters.filter((c) => c.id !== counterId);
    const shopping_items = this.state.shopping_items.filter(
      (item) => item.id !== item_id
    );
    this.setState({ shopping_items });
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar
            totalcounters={
              this.state.shopping_items.filter((c) => c.value > 0).length
            }
          />
          <div className="container-fluid">
            <div className="col-sm-12">
              <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/stores"
                  component={() => (
                    <HomeComp
                      shopping_items={this.state.shopping_items}
                      onIncrement={this.handleIncrement}
                      onDelete={this.handleDecrement}
                    />
                  )}
                />
              </Switch>
              {/* <HomeComp
                shopping_items={this.state.shopping_items}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDecrement}
              /> */}
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
