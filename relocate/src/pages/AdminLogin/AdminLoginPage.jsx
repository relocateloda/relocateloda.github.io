import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { Button, Form, Input, InputGroup, Schema, } from "rsuite";
import { TextField, TextFieldPassWord } from "../../Atom/loginForm/LoginForm";
import { useState } from "react";
import styles from "./AdminLogin.module.scss"
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";

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
        <div className={styles.container}>
            <Navbar />
            <div className={styles.wrapper}>
            <h3 className={styles.title}>Вхід</h3>
            <Form
                model={model}
                formValue={formValue}
                onChange={setFormValue}
            >
                <TextField name="name" label="Username" />
                <TextField name="password" label="Password"/>
                <Button className={styles.submitBtn} appearance="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            <Footer />
        </div>
    )
}

export default AdminLoginPage