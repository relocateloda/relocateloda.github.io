import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { Button, Form, Input, InputGroup, Schema, } from "rsuite";
import { TextField } from "../../Atom/loginForm/LoginForm";
import { useState } from "react";
import Closed from "../../assets/icon/visibility.png"
import Show from "../../assets/icon/view.png"

const model = Schema.Model({
    name: Schema.Types.StringType().isRequired('This field is required.'),
    password: Schema.Types.StringType().isRequired('This field is required.')
});

const PassWord = ()=> {
    const [visible, setVisible] = useState(false);

    const handleChange = () => {
        setVisible(!visible);
    };
    // return <InputGroup inside style={styles}>
    return <InputGroup inside >
        <Input type={visible ? 'text' : 'password'} />
        <InputGroup.Button onClick={handleChange}>
            <img src={visible ? Show : Closed} alt="eye icon"/>
        </InputGroup.Button>
    </InputGroup>
}
const AdminLoginPage = () => {
    return (
        <div>
            <h1>Login form for admin here</h1>
            <Form model={model}>
                <TextField name="name" label="Username" />
                <TextField name="password" label="Email" accepter={PassWord}/>

                <Button appearance="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AdminLoginPage