import style from "./SendOffer.module.scss"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Button, CheckPicker, Form, Message, Schema, toaster } from "rsuite";
import { getCategories } from "../../utils/apiCalls/firebaseRequests";

import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";

const { ArrayType, StringType, NumberType } = Schema.Types;
const model = Schema.Model({
  code: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  contact_person: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  description: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  name: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  phone: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  proposal: Schema.Types.StringType().isRequired("Обов'язково заповнити"),
  category: ArrayType()
    .minLength(1, "Виберіть одну категоію")
    .isRequired("This field is required."),
});

const Field = forwardRef((props, ref) => {
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
const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const SendOffer = () => {
  const [categories, setCategories] = useState(null);
  const [categoriesForInput, setCategoriesForInput] = useState([]);
  console.log("categoriesForInput", categoriesForInput);
  useEffect(() => getCategories(setCategories), []);
  useEffect(
    () =>
      setCategoriesForInput(
        categories?.map((item) => {
          return {
            ...item,
            label: item.name,
          };
        })
      ),
    [categories]
  );
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
    category: [],
  });
  console.log("formValue", formValue);
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    toaster.push(<Message type="success">Success</Message>);
  };

  const handleSendNew = async () => {
    const collectionRef = collection(db, "other_proposals");
    const payload = {
      name: "234",
      phone: "234",
      img: "23423",
      contact_person: "234234",
      code: "234",
      description: "234",
      proposal: "234234",
    };
    const docRef = await addDoc(collectionRef, payload);
    // console.log(docRef.id);
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
    >
      <TextField name="name" label="Назва юридичної/фізичної особи" />
      <TextField name="code" label="ЄДРПОУ або ІПН" />
      <TextField name="contact_person" label="Контактна особа " />
      <TextField name="phone" label="Контактний телефон" />

      <Field
        name="category"
        label="Сфера, у якій Ваша компанія може надати пропозиції до співпраці"
        accepter={CheckPicker}
        error={formError.category}
        style={{ display: "inline-block", width: 200 }}
        data={categoriesForInput}
      />
        <TextField name="description" label="Короткий опис Вашої діяльності" />
        <TextField name="proposal" label="Ваші пропозиції до співпраці" />
      {/*<Field name="number" label="Number" accepter={InputNumber} error={formError.number} />*/}
      {/*<Field*/}
      {/*    name="skills"*/}
      {/*    label="Skills"*/}
      {/*    accepter={CheckboxGroup}*/}
      {/*    error={formError.skills}*/}
      {/*    inline*/}
      {/*>*/}
      {/*    <Checkbox value={'Node.js'}>Node.js</Checkbox>*/}
      {/*    <Checkbox value={'CSS3'}>CSS3</Checkbox>*/}
      {/*    <Checkbox value={'Javascript'}>Javascript</Checkbox>*/}
      {/*    <Checkbox value={'HTML5'}>HTML5</Checkbox>*/}
      {/*</Field>*/}

      {/*<Field*/}
      {/*    name="browser"*/}
      {/*    label="Browser"*/}
      {/*    accepter={RadioGroup}*/}
      {/*    error={formError.browser}*/}
      {/*    inline*/}
      {/*>*/}
      {/*    <Radio value={'Chrome'}>Chrome</Radio>*/}
      {/*    <Radio value={'FireFox'}>FireFox</Radio>*/}
      {/*    <Radio value={'IE'}>IE</Radio>*/}
      {/*</Field>*/}

      {/*<Field*/}
      {/*    accepter={Slider}*/}
      {/*    min={0}*/}
      {/*    max={20}*/}
      {/*    name="level"*/}
      {/*    label="Level"*/}
      {/*    style={{ width: 200, margin: '10px 0' }}*/}
      {/*    errorMessage={formError.level}*/}
      {/*/>*/}

      {/*<Field*/}
      {/*    accepter={DatePicker}*/}
      {/*    name="createDate"*/}
      {/*    label="Create Date"*/}
      {/*    errorMessage={formError.createDate}*/}
      {/*/>*/}

      <Form.Group>
        <Button appearance="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Group>
    </Form>
    <Footer />
    </div>
  );
};

export default SendOffer;
