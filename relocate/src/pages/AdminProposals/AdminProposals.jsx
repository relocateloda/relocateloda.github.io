import styles from "./AdminProposals.module.scss";
import Navbar from "../../Atom/Navbar/Navbar";
import { Message, SelectPicker, toaster } from "rsuite";
import { useEffect, useState } from "react";
import {
  deleteOffer,
  deleteProposal,

  getCategories,
  getOffersByCategory,
  getPoposalsByCategory,
} from "../../utils/apiCalls/firebaseRequests";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import Editmodal from "../../Atom/modal/Editmodal";
import Footer from "../../Atom/Footer/Footer";
import Icondelete from "../../assets/icon/trash копіювати.png";
import IconApprove from "../../assets/icon/icons8-ok-48.png";
import IconDisapprove from "../../assets/icon/remove.png";
import IconPencil from "../../assets/icon/pencil.png";

const AdminProposals = () => {
  const [catategories, setCategories] = useState([]);
  const [selectedProposalsCategory, setSelectedProposalsCategory] =
    useState(null);
  const [proposalsList, setProposalsList] = useState(null);
  const [selectedOffersCategory, setSelectedOffersCategory] = useState(null);
  const [offersList, setOffersList] = useState(null);
  const [offersEditMode, setOffersEditMode] = useState(false);
  const [proposalsEditMode, setProposalsEditMode] = useState(false);
  const [itemForEdit, setItemForEdit] = useState(false);

  useEffect(() => getCategories(setCategories), []);
  useEffect(
    () => getPoposalsByCategory(selectedProposalsCategory, setProposalsList),
    [selectedProposalsCategory]
  );
  useEffect(
    () => getOffersByCategory(selectedOffersCategory, setOffersList),
    [selectedOffersCategory]
  );
  const approveProposal = async (category, item) => {
    const collectionRef = collection(db, `${category}_confirmed`);
    const docRef = await addDoc(collectionRef, {
      code: item.code,
      contact_person: item.contact_person,
      description: item.description,
      img: item.img,
      name: item.name,
      phone: item.phone,
      proposal: item.proposal,
      category: item.category,
    });
    docRef?.id &&
      toaster.push(<Message type="success">Пропозиція погоджена</Message>);
    docRef?.id && (await deleteProposal(category, item.id));
  };
  const removeFromOffers = async (category, item) => {
    const collectionRef = collection(db, `${category}_proposals`);
    const docRef = await addDoc(collectionRef, {
      code: item.code,
      contact_person: item.contact_person,
      description: item.description,
      img: item.img,
      name: item.name,
      phone: item.phone,
      proposal: item.proposal,
      category: item.category,
    });
    docRef?.id &&
      toaster.push(
        <Message type="success">Надіслано в непогоджені пропозиції</Message>
      );
    docRef?.id && (await deleteOffer(category, item.id));
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.headerText}>
        Редагування погоджених та неперевірених пропозицій
      </h1>
      <div className={styles.flexBox}>
        <div>
          <h3 className={styles.title}>Редагування погоджених пропозицій</h3>
          <SelectPicker
            data={catategories}
            searchable={false}
            labelKey="name"
            placeholder="Вибрати категорію"
            value={selectedOffersCategory}
            onChange={setSelectedOffersCategory}
            className={styles.selectPicer}
          />
          {/*//TODO make component here*/}
          {offersList?.length > 0 &&
            offersList.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.wrapperBtn}>
                  <div
                    onClick={() => {
                      deleteOffer(selectedOffersCategory, item.id);
                      getOffersByCategory(
                        selectedOffersCategory,
                        setOffersList
                      );
                    }}
                  >
                    <img
                      className={styles.removeBtn}
                      src={Icondelete}
                      alt="remove"
                    />
                  </div>
                  <div
                    onClick={() =>
                      removeFromOffers(selectedOffersCategory, item)
                    }
                  >
                    <img
                      className={styles.disapproveBtn}
                      src={IconDisapprove}
                      alt="Disapprove"
                    />
                  </div>
                  <div
                    onClick={() => {
                      setOffersEditMode(true);
                      setItemForEdit(item);
                    }}
                  >
                    <img
                      className={styles.disapproveBtn}
                      src={IconPencil}
                      alt="refactoring"
                    />
                  </div>
                </div>
                {/*<h3 className={styles.category}>{item.name}</h3>*/}
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <b>Назва юридичної/фізичної особи</b> - {item.name}
                  </li>
                  <li className={styles.listItem}>
                    <b>ЄДРПОУ або ІПН</b> - {item.code}
                  </li>
                  <li className={styles.listItem}>
                    <b>Контактна особа</b> - {item.contact_person}
                  </li>
                  <li className={styles.listItem}>
                    <b>Контактний телефон</b> - {item.phone}
                  </li>
                  <li className={styles.listItem}>
                    <b>Короткий опис Вашої діяльності</b> - {item.description}
                  </li>
                  <li className={styles.listItem}>
                    <b>Ваші пропозиції до співпраці</b> - {item.proposal}
                  </li>
                  <li className={styles.listItem}>
                    <b>Посилання на картинку</b> - {item.img}
                  </li>
                </ul>
              </div>
            ))}
        </div>
        <div>
          <h3 className={styles.title}>Редагування неперевірених пропозицій</h3>
          <SelectPicker
            data={catategories}
            searchable={false}
            labelKey="name"
            placeholder="Вибрати категорію"
            value={selectedProposalsCategory}
            onChange={setSelectedProposalsCategory}
            className={styles.selectPicer}
          />
          {/*//TODO make component here*/}
          {proposalsList?.length > 0 &&
            proposalsList.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.wrapperBtn}>
                  <div
                    onClick={() =>
                      deleteProposal(selectedProposalsCategory, item.id)
                    }
                  >
                    <img
                      className={styles.removeBtn}
                      src={Icondelete}
                      alt="remove"
                    />
                  </div>
                  <div
                    onClick={() =>
                      approveProposal(selectedProposalsCategory, item)
                    }
                  >
                    <img
                      className={styles.approveBtn}
                      src={IconApprove}
                      alt="Approve"
                    />
                  </div>
                  <div
                    onClick={() => {
                      setProposalsEditMode(true);
                      setItemForEdit(item);
                    }}
                  >
                    <img
                      className={styles.refreshBtn}
                      src={IconPencil}
                      alt="edit"
                    />
                  </div>
                </div>
                {/*<h3 className={styles.category}>{item.category}</h3>*/}
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <b>Назва юридичної/фізичної особи</b> - {item.name}
                  </li>
                  <li className={styles.listItem}>
                    <b>ЄДРПОУ або ІПН</b> - {item.code}
                  </li>
                  <li className={styles.listItem}>
                    <b>Контактна особа</b> - {item.contact_person}
                  </li>
                  <li className={styles.listItem}>
                    <b>Контактний телефон</b> - {item.phone}
                  </li>
                  <li className={styles.listItem}>
                    <b>Короткий опис Вашої діяльності</b> - {item.description}
                  </li>
                  <li className={styles.listItem}>
                    <b>Ваші пропозиції до співпраці</b> - {item.proposal}
                  </li>
                  <li className={styles.listItem}>
                    <b>Посилання на картинку</b> - {item.img}
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <Footer />
      {(proposalsEditMode || offersEditMode) && (
        <Editmodal
          itemType={proposalsEditMode ? "_proposals" : "_confirmed"}
          editMode={proposalsEditMode ? proposalsEditMode : offersEditMode}
          setEditMode={
            proposalsEditMode ? setProposalsEditMode : setOffersEditMode
          }
          itemForEdit={itemForEdit}
        />
      )}
    </div>
  );
};

export default AdminProposals;
