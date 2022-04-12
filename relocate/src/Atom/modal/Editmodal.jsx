import {
  Button,
  Form,
  Message,
  Modal,
  Schema,
  SelectPicker,
  toaster,
} from "rsuite";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteItem,
  deleteProposal,
  editExistingOffer,
  editExistingProposal,
  getCategories,
} from "../../utils/apiCalls/firebaseRequests";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { RoutesConst } from "../../common/Routes";
import { Field, model, TextField } from "../../pages/SendOffer/SendOffer";
import styles from "./Editmodal.module.scss";

const Editmodal = ({ editMode, setEditMode, itemType, itemForEdit }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => getCategories(setCategories), []);

  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState(itemForEdit);

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    handleSendNew();
  };
  const handleSendNew = async () => {
    if (itemForEdit?.category === formValue?.category) {
      const docRef = doc(db, `${itemForEdit?.category}${itemType}`, itemForEdit?.id);
      const res = await setDoc(docRef, {
        code: formValue?.code,
        contact_person: formValue?.contact_person,
        description: formValue?.description,
        img: formValue?.img,
        name: formValue?.name,
        phone: formValue?.phone,
        proposal: formValue?.proposal,
        category: formValue?.category,
      })
    } else {
      const collectionRef = collection(db, `${formValue.category}${itemType}`);
      const docRef = await addDoc(collectionRef, {
        code: formValue?.code,
        contact_person: formValue?.contact_person,
        description: formValue?.description,
        img: formValue?.img,
        name: formValue?.name,
        phone: formValue?.phone,
        proposal: formValue?.proposal,
        category: formValue?.category,
      });
      docRef?.id &&
        (await deleteItem(itemForEdit?.category, itemType, itemForEdit?.id));
    }
      toaster.push(<Message type="success">Пропозиція вдало змінена</Message>);
      setEditMode(false);
  };
  return (
    <Modal
      open={editMode}
      onClose={() => setEditMode(false)}
      className={styles.modal}
    >
      <Modal.Header>
        <Modal.Title>
          Редагувати {itemType === "_confirmed" ? "погоджену" : "надіслану"}{" "}
          пропозицію
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField
            name="name"
            label="Назва юридичної/фізичної особи"
            placeholder="Назва"
          />
          <TextField
            name="code"
            label="ЄДРПОУ або ІПН"
            placeholder="ЄДРПОУ або ІПН"
          />
          <TextField
            name="contact_person"
            label="Контактна особа"
            placeholder="ПІБ"
          />
          <TextField
            name="phone"
            label="Контактний телефон"
            placeholder="+380"
          />

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
          <TextField
            name="description"
            label="Короткий опис Вашої діяльності"
            placeholder="Короткий опис"
          />
          <TextField
            name="proposal"
            label="Ваші пропозиції до співпраці"
            placeholder="Пропозиції"
          />
          <TextField
            name="img"
            label="Додайте посилання на логотип Вашої компанії (за наявності)"
            placeholder="Пропозиції"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} appearance="primary">
          Зберегти
        </Button>
        <Button onClick={() => setEditMode(false)} appearance="subtle">
          Відміна
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Editmodal;
