import { encryptStorageAdmin } from "../../utils/encryptStorage";
import styles from "./AdminProposals.module.scss";
import Navbar from "../../Atom/Navbar/Navbar";
import { SelectPicker } from "rsuite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategories, getOffersByCategory,
  getPoposalsByCategory,
} from "../../utils/apiCalls/firebaseRequests";

const AdminProposals = () => {
  const [catategories, setCategories] = useState([]);
  const [selectedProposalsCategory, setSelectedProposalsCategory] = useState(null);
  const [proposalsList, setProposalsList] = useState(null);

  const [selectedOffersCategory, setSelectedOffersCategory] = useState(null);
  const [offersList, setOffersList] = useState(null);

  useEffect(() => getCategories(setCategories), []);
  useEffect(
    () => getPoposalsByCategory(selectedProposalsCategory, setProposalsList),
    [selectedProposalsCategory]
  );
  useEffect(
      () => getOffersByCategory(selectedOffersCategory, setOffersList),
      [selectedOffersCategory]
  );
  console.log("proposalsList", proposalsList);
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
                  <div>
                    {item.category}
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
                    <div>
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
