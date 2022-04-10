import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { Button, Form, Input, InputGroup, Schema, } from "rsuite";
import { TextField, TextFieldPassWord } from "../../Atom/loginForm/LoginForm";
import { useState } from "react";

const model = Schema.Model({
    name: Schema.Types.StringType().isRequired('This field is required.'),
    password: Schema.Types.StringType().isRequired('This field is required.')
});

const AdminLoginPage = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        password: '',
    });
    console.log(formValue);
    return (
        <div>
            <h3>Вхід</h3>
            <Form
                model={model}
                formValue={formValue}
                onChange={setFormValue}
            >
                <TextField name="name" label="Username" />
                <TextField name="password" label="Password"/>
                <Button appearance="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AdminLoginPage