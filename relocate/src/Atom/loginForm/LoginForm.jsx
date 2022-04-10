import { Form, Input, InputGroup, Schema } from "rsuite";
import { useState } from "react";
import Show from "../../assets/icon/view.png";
import Closed from "../../assets/icon/visibility.png";

export const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

