import React from "react";

import { isValidSize } from "../logic/validators";
import { Jumbotron, FormControl } from "react-bootstrap";

const Plateau = props => {
  return (
    <Jumbotron className="px-sm-5 py-sm-5 px-3 py-4">
      <h2>Plateau Size</h2>
      <br />
      <p>How large is the plateau on Mars ?</p>
      <ul>
        <li>
          You can define the size of your plateau with XY-coordinates, e.g.{" "}
          <b>5 5</b>.
        </li>
      </ul>
      <FormControl
        value={props.size}
        onChange={props.handleChange}
        placeholder="999 999"
        maxLength="7"
        className={isValidSize(props.size) ? "" : "error"}
      />
      <p />
    </Jumbotron>
  );
};

export default Plateau;
