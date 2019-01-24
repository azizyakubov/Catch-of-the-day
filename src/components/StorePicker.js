import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  //When your own compnents extend from React.component, your methods dont actually bind with the React component's native methods.
  //Because of this, "this" keyword will not work in methods you write like goToStore until they are explicitly bound with the whole component.
  //to do this, you need to describe a constructor function with a super() and explicitly "bind" as shown below.

  //OR to avoid doing the constructor and explicit binding, instead of declaring a METHOD in the component, you can declare a PROPERTY set to an arrow function.
  //Properties are set to an instance instead of nothing, allowing you to reference "this"

  myInput = React.createRef();

  //instead of goToStore(event){stuff} use arrow function to bind "this" to the instance of the component
  goToStore = event => {
    // Stop the form from submitting
    event.preventDefault();
    // get the text from input
    const storeName = this.myInput.current.value;
    //change the page to store/whatever with push state via React router. Since StorePicker is a child of react router.
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    );
  }
}

export default StorePicker;
