import React, { Component } from "react";

import Plateau from "./Plateau";
import Rovers from "./Rovers";
import { Jumbotron } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "5 5",
      rovers: [
        { position: "1 2 N", instructions: "LMLMLMLMM" },
        { position: "3 3 E", instructions: "MMRMMRMRRM" },
        { position: "99a 999 W", instructions: "LMRa" },
        { position: "", instructions: "" }
      ]
    };

    this.handlePlateauChange = this.handlePlateauChange.bind(this);
    this.handleRoverAdd = this.handleRoverAdd.bind(this);
    this.handleRoverChange = this.handleRoverChange.bind(this);
    this.handleRoverDelete = this.handleRoverDelete.bind(this);
  }

  handlePlateauChange(event) {
    this.setState({ size: event.target.value });
  }

  handleRoverAdd() {
    this.setState(prevState => {
      return {
        rovers: [...prevState.rovers, { position: "", instructions: "" }]
      };
    });
  }

  handleRoverChange(event, index) {
    const { name, value } = event.target;

    this.setState(prevState => {
      const rovers = prevState.rovers.map((rover, i) => {
        if (i === index) {
          return { ...rover, [name]: value };
        }
        return rover;
      });
      return { rovers };
    });
  }

  handleRoverDelete(index) {
    this.setState(prevState => {
      const rovers = prevState.rovers.filter((rover, i) => i !== index);
      return { rovers };
    });
  }

  render() {
    return (
      <div className="App">
        <Jumbotron className="px-sm-5 py-sm-1 px-3 py-1">
          <h1 className="text-center">Mars Rovers</h1>
          <hr />
        </Jumbotron>
        <Plateau
          size={this.state.size}
          handleChange={this.handlePlateauChange}
        />
        <Rovers
          size={this.state.size}
          rovers={this.state.rovers}
          handleAdd={this.handleRoverAdd}
          handleChange={this.handleRoverChange}
          handleDelete={this.handleRoverDelete}
        />
      </div>
    );
  }
}
export default App;
