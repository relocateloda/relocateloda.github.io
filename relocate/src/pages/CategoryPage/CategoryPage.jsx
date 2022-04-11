import styles from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

import OffersCards from "../../Atom/OfferCards/OfferCards";
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";
import { db } from "../../firebase-config";
import {
  getCategories,
  getOffersByCategory,
  login,
} from "../../utils/apiCalls/firebaseRequests";

const CategoryPage = ({ category }) => {
  const [offersList, setOffersList] = useState(null);
  const [catategories, setCategories] = useState([]);
  const getCategoryNameByValue = () =>
    catategories?.filter((item) => {
      // eslint-disable-next-line no-unused-expressions
      if (item?.value === category) {
        return item?.name;
      }
    })[0]?.name;
  useEffect(() => {
    getOffersByCategory(category, setOffersList);
    getCategories(setCategories);
  }, []);
  useEffect(() => console.log("offersList", offersList), [offersList]);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Пропозиції у сфері</h1>
      <h3>{getCategoryNameByValue()}</h3>
      {offersList?.length > 0 ?
        offersList.map((item) => (
          <div key={item.id}>
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
        )) :
      <h4>
          Нажаль, жодного варіанту не доступно
      </h4>}

      <Footer />
    </div>
  );
};

export default CategoryPage;
