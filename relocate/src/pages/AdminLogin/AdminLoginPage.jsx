import { Button, Form, Input, InputGroup, Schema } from "rsuite";
import { TextField } from "../../Atom/loginForm/LoginForm";
import { useEffect, useRef, useState } from "react";
import Show from "../../assets/icon/view.png";
import Closed from "../../assets/icon/visibility.png";
import { login } from "../../utils/apiCalls/firebaseRequests";
import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { useNavigate } from "react-router-dom";
import { RoutesConst } from "../../common/Routes";
import styles from "./AdminLogin.module.scss"
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  pass: Schema.Types.StringType().isRequired("This field is required."),
});

const AdminLoginPage = () => {
  const [visible, setVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const formRef = useRef();
  const handleChange = () => {
    setVisible(!visible);
  };
    useEffect(() => {
        const user = encryptStorageAdmin.getItem("au");
        user === true && navigate(RoutesConst.ADMIN_PROPOSALS)
    }, []);
  useEffect(() => {
    if (isAdmin) {
      encryptStorageAdmin.setItem("au", true);
      navigate(RoutesConst.ADMIN_PROPOSALS)
    }
  }, [isAdmin]);
  // useEffect(() => console.log("isError", isError), [isError]);
  const [formValue, setFormValue] = useState({
    name: "",
    pass: "",
  });
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    login(`${formValue.name}${formValue.pass}`, setIsAdmin, setIsError);
  };
  return (
      <div className={styles.container}>
          <Navbar />
          <div className={styles.wrapper}>
              <h3 className={styles.title}>Вхід</h3>
      {isError && <p className={styles.error}>Невірний користувач чи пароль</p>}
      <Form
        model={model}
        formValue={formValue}
        onChange={setFormValue}
        ref={formRef}
      >
        <TextField name="name" label="Ім'я користувача" />
        <TextField
          name="pass"
          label="Пароль"
          type={visible ? "text" : "password"}
        />
        <img
          className={styles.eye}
          src={visible ? Show : Closed}
          alt=""
          onClick={handleChange}
        />
        <Button style={{width: "100%", marginTop: "20px"}} appearance="primary" onClick={handleSubmit}>
          Підтвердити
        </Button>
      </Form>
          </div>
          <Footer />
      </div>
  );
};

export default AdminLoginPage;
