import style from "./SendOffer.module.scss"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Button, SelectPicker, Form, Message, Schema, toaster } from "rsuite";
import { getCategories } from "../../utils/apiCalls/firebaseRequests";

import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { RoutesConst } from "../../common/Routes";

const { ArrayType, StringType, NumberType } = Schema.Types;
export const model = Schema.Model({
  code: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  contact_person: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  description: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  name: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  phone: Schema.Types.StringType().isRequired("Обов'язково заповнити").minLength(13,"Мінінальна довжина 13 символів"),
  proposal: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  category: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
});

export const Field = forwardRef((props, ref) => {
  const { name, message, label, accepter, error, ...rest } = props;
  return (
    <Form.Group
      controlId={`${name}-10`}
      ref={ref}
      className={error ? "has-error" : ""}
    >
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...rest}
      />
      <Form.HelpText>{message}</Form.HelpText>
    </Form.Group>
  );
});
export const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const SendOffer = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => getCategories(setCategories), []);

  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    code: "",
    contact_person: "",
    description: "",
    img: "",
    name: "",
    phone: "",
    proposal: "",
    category: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    handleSendNew();
  };

  const handleSendNew = async () => {
    const collectionRef = collection(db, `${formValue.category}_proposals`);
    const docRef = await addDoc(collectionRef, formValue);
    docRef?.id && toaster.push(<Message type="success">Ваша пропозиція вдало надіслана</Message>);
    docRef?.id && setTimeout(()=> navigate(RoutesConst.MAIN), 1500)
  };
  return (
    <div className={style.container}>
      <Navbar />
    <Form
      ref={formRef}
      onChange={setFormValue}
      onCheck={setFormError}
      formValue={formValue}
      model={model}
      className={style.form}
    >
      <TextField name="name" label="Назва юридичної/фізичної особи" placeholder="Назва"/>
      <TextField name="code" label="ЄДРПОУ або ІПН" placeholder="ЄДРПОУ або ІПН"/>
      <TextField name="contact_person" label="Контактна особа" placeholder="ПІБ"/>
      <TextField name="phone" label="Контактний телефон" placeholder="+380"/>

      <Field
        name="category"
        label="Сфера, у якій Ваша компанія може надати пропозиції до співпраці"
        accepter={SelectPicker}
        error={formError.category}
        style={{ display: "inline-block", width: 200 }}
        data={categories}
        searchable={false}
        labelKey="name"
        placeholder="Вибрати"
      />
        <TextField name="description" label="Короткий опис Вашої діяльності" placeholder="Короткий опис"/>
        <TextField name="proposal" label="Ваші пропозиції до співпраці" placeholder="Пропозиції"/>
        <TextField name="img" label="Додайте посилання на логотип Вашої компанії (за наявності)" placeholder="Пропозиції"/>
      <Form.Group>
        <Button style={{width: "100%", marginTop: "20px"}} appearance="primary" onClick={handleSubmit}>
          Надіслати
        </Button>
      </Form.Group>
    </Form>
    <Footer />
    </div>
  );
};

export default SendOffer;
