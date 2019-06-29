import React from "react";
import { Table, Button } from "react-bootstrap";

import Rover from "./Rover";

const Rovers = props => {
  return (
    <div className="px-sm-5 py-sm-5 px-3 py-4">
      <h2>Rovers</h2>
      <br />
      <p>
        Now that you've defined the size of your plateau, let's set up some
        rovers on Mars:
      </p>
      <ul>
        <li>
          First, give your rover an initial position, e.g. "<b>1 2 N</b>", which
          means it is initially standing on coordinates x=<b>1</b> and y=
          <b>2</b> and facing <b>N</b>orth.
        </li>
        <li>
          Then, give it a set of instructions, e.g. "<b>LMRM</b>" which means:
          turn <b>L</b>eft, <b>M</b>ove forwards, turn <b>R</b>ight, <b>M</b>ove
          forwards again.
        </li>
        <li>Finally, in the 3rd column, see where your rover ends up!</li>
      </ul>
      <p>
        Thanks to ReactJS, the final position will update in real time as you
        modify the other input fields!
      </p>
      <br />
      <Button className="mb-3" onClick={props.handleAdd}>
        Add a Rover
      </Button>
      <br />
      <br />
      <Table bordered>
        <thead>
          <tr>
            <th>Initial Position</th>
            <th>Instructions</th>
            <th>Final Position</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.rovers.map((rover, index) => (
            <Rover
              key={index}
              rover={rover}
              size={props.size}
              handleChange={event => props.handleChange(event, index)}
              handleDelete={() => props.handleDelete(index)}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Rovers;
