import React, { Component } from "react";

class HomeComp extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    count: 0,
  };
  styles = {
    width: "100%",
  };
  quantity() {
    return this.props.shopping_items.value == 0
      ? "Zero"
      : this.props.shopping_items.value;
  }
  render() {
    console.log(this.props.shopping_items);
    return (
      <React.Fragment>
        <h2>Painting Gallery</h2>
        <div className="row">
          {this.props.shopping_items.map((items) => (
            <div className="col-md-3 card">
              <img
                className="card-img-top"
                src={items.imageUrl}
                alt="item image"
                style={this.styles}
              />
              <div className="card-body">
                <h4 className="card-title">{items.p_name}</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => this.props.onIncrement(items)}
                >
                  Add Item
                </button>
                <button className="btn btn-danger m-2">Delete Item</button>
                <span className="badge badge-warning">Qty : {items.value}</span>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComp;
