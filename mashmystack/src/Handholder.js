import React from "react";

export default class Handholder extends React.Component {

  constructor(props) {
    super(props);

    this.handleHand = this.handleHand.bind(this);

  }

  handleHand(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className="masher">

        <p>Related Content:</p>

      </div>
    );
  }
}
