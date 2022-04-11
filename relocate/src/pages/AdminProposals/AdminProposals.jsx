import styles from "./AdminProposals.module.scss";
import Navbar from "../../Atom/Navbar/Navbar";
import { Message, SelectPicker, toaster } from "rsuite";
import { useEffect, useState } from "react";
import {
  deleteOffer,
  deleteProposal, editExistingOffer, editExistingProposal,
  getCategories, getOffersByCategory,
  getPoposalsByCategory,
} from "../../utils/apiCalls/firebaseRequests";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const AdminProposals = () => {
  const [catategories, setCategories] = useState([]);
  const [selectedProposalsCategory, setSelectedProposalsCategory] = useState(null);
  const [proposalsList, setProposalsList] = useState(null);
  const [selectedOffersCategory, setSelectedOffersCategory] = useState(null);
  const [offersList, setOffersList] = useState(null);
  const [formValueOffer, setFormValueOffer] = useState(null);
  const [formValueProposal, setFormValueProposal] = useState(null);
  const [offersEditMode, setOffersEditMode] = useState(false);
  const [proposalsEditMode, setProposalsEditMode] = useState(false);


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
    console.log(category, item);
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
    docRef?.id && toaster.push(<Message type="success">Пропозиція погоджена</Message>);
    docRef?.id && await deleteProposal(category, item.id);
    };
  const removeFromOffers = async (category, item) => {
    console.log(category, item);
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
    docRef?.id && toaster.push(<Message type="success">Надіслано в непогоджені пропозиції</Message>);
    docRef?.id && await deleteOffer(category, item.id);
  };

  const editOffer = async (id) => {
    await editExistingOffer(selectedOffersCategory, {
      code: formValueOffer.code,
      contact_person: formValueOffer.contact_person,
      description: formValueOffer.description,
      img: formValueOffer.img,
      name: formValueOffer.name,
      phone: formValueOffer.phone,
      proposal: formValueOffer.proposal,
      category: formValueOffer.category,
    }, id);
  }

  const editProposal = async (id) => {
    await editExistingProposal(selectedOffersCategory, {
      code: formValueOffer.code,
      contact_person: formValueOffer.contact_person,
      description: formValueOffer.description,
      img: formValueOffer.img,
      name: formValueOffer.name,
      phone: formValueOffer.phone,
      proposal: formValueOffer.proposal,
      category: formValueOffer.category,
    }, id);
  }


  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.headerText}>
        Редагування погоджених та неперевірених пропозицій
      </h1>
      <div className={styles.flexBox}>
        <div>
          <h3>Редагування погоджених пропозицій</h3>
          <SelectPicker
              data={catategories}
              searchable={false}
              labelKey="name"
              placeholder="Вибрати категорію"
              value={selectedOffersCategory}
              onChange={setSelectedOffersCategory}
          />
          {/*//TODO make component here*/}
          {offersList?.length > 0 &&
              offersList.map((item) => (
                  <div key={item.id}>
                    {item.category}
                    {item.id}
                    <p onClick={()=>{
                      deleteOffer(selectedOffersCategory, item.id);
                      getOffersByCategory(selectedOffersCategory, setOffersList)
                    }}><b>DELETE</b></p>
                    <p onClick={()=>removeFromOffers(selectedOffersCategory, item)}><b>DISAPPROVE</b></p>
                    <p>Назва юридичної/фізичної особи - {item.name}</p>
                    <p>ЄДРПОУ або ІПН - {item.code}</p>
                    <p>Контактна особа - {item.contact_person}</p>
                    <p>Контактний телефон -{item.phone}</p>
                    <p>Короткий опис Вашої діяльності - {item.description}</p>
                    <p>Ваші пропозиції до співпраці - {item.proposal}</p>
                    <p>Посилання на картинку - {item.img}</p>
                    <br />
                  </div>
              ))}
        </div>
        <div>
          <h3>Редагування неперевірених пропозицій</h3>
            <SelectPicker
                data={catategories}
                searchable={false}
                labelKey="name"
                placeholder="Вибрати категорію"
                value={selectedProposalsCategory}
                onChange={setSelectedProposalsCategory}
            />
            {/*//TODO make component here*/}
            {proposalsList?.length > 0 &&
                proposalsList.map((item) => (
                    <div key={item.id}>
                      <p onClick={()=>deleteProposal(selectedProposalsCategory, item.id)}><b>delete</b></p>
                      <p onClick={()=>approveProposal(selectedProposalsCategory, item)}><b>APPROVE</b></p>
                      {item.category}
                        <p>Назва юридичної/фізичної особи - {item.name}</p>
                        <p>ЄДРПОУ або ІПН - {item.code}</p>
                        <p>Контактна особа - {item.contact_person}</p>
                        <p>Контактний телефон - {item.phone}</p>
                        <p>Короткий опис Вашої діяльності - {item.description}</p>
                        <p>Ваші пропозиції до співпраці - {item.proposal}</p>
                        <p>Посилання на картинку - {item.img}</p>
                        <br />
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProposals;
