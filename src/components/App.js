import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  static propTypes = {
    match: PropTypes.object
  };
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  //stop listening to changes on the database level when the App component is unmmounted
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  //any custom fuction that updates state needs to live in the same component that the state lives in, ie App.js
  //and can be passed on as props as shown below inside <inventory />
  addFish = fish => {
    //In order to update state, you need to use React setState API
    //1.Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2.Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3.Set the new fishes object to state, override
    this.setState({
      fishes: fishes
    });
    //pass this into the Inventory compnent below
  };

  updateFish = (key, updatedFish) => {
    //1.take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2.Update the state
    fishes[key] = updatedFish;
    //3.set that to state
    this.setState({ fishes: fishes });
  };

  deleteFish = key => {
    //1.take a copy of state
    const fishes = { ...this.state.fishes };
    //2.update the state for firebase because it needs a null for deletion
    fishes[key] = null;
    //3. update the state
    this.setState({ fishes });
    //4.pass it downstream to editfishform.js
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // Take a copy of state
    const order = { ...this.state.order };
    // Either add to the order or update the order
    order[key] = order[key] + 1 || 1;
    // call setState to update our state object
    this.setState({ order });
  };
  removeFromOrder = key => {
    // Take a copy of state
    const order = { ...this.state.order };
    // remove the item from order. Since we don't need to mirror to firebase, you can use delete instead of setting to null
    delete order[key];
    // call setState to update our state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              // for react to be fast, it needs to be able to iterate over all the elements and find that specific component Fast.
              // To do so, it needs a unique identifier "key={}" for the thing it renders, which is usually an id from a database, but in our case can be set to anything, which is the key of the object Fishes.
              // However, the key prop is not displayed in dev tools, so you need to add another attribute, something like index={} if you want to pull the value of the key out
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
