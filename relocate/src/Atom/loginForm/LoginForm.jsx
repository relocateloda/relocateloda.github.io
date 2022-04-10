import { Form, Schema } from 'rsuite';

export const TextField = ({ name, label, accepter, ...rest }) => (
    <Form.Group controlId={name}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
);
