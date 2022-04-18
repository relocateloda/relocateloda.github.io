import styles from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

import OffersCards from "../../Atom/OfferCards/OfferCards";
import Navbar from "../../Atom/Navbar/Navbar";
import GetBackPage from "../../Atom/GetBackPage/getBackPage"

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

  return (
    <div className={styles.container}>
      <Navbar />
      <GetBackPage />
      <div className={styles.wrapperHeader}>
        <h1>Пропозиції у сфері</h1>
        <h3>{getCategoryNameByValue()}</h3>
      </div>
      <div className={styles.wrapper}>
        {offersList?.length > 0 ? (
          offersList.map((item) => (
            <div className={styles.card} key={item.id}>
              {/*<h2 className={styles.titleCategori}>{item.category}</h2>*/}
                <div className={styles.flex}>
                    {item.img !== "" ? <img className={styles.logo} src={item.img} alt="logo" /> : <div className={styles.logoLetters}>{item.name.substring(0,2).toUpperCase()}</div>}
                    <div className={styles.nameBlock}>
                        <p className={styles.title}>{item.name}</p>
                        <span><b>ЄДРПОУ / ІПН</b>   {item.code}</span>
                    </div>
                </div>
              <ul className={styles.list}>
                {/*<li className={styles.listItem}>*/}
                {/*  <b>Назва юридичної/фізичної особи</b> - {item.name}*/}
                {/*</li>*/}
                {/*<li className={styles.listItem}>*/}
                {/*  <b>ЄДРПОУ або ІПН</b> - {item.code}*/}
                {/*</li>*/}
                  <hr className={styles.hr}/>
                  <li className={styles.listItem}>
                      <b>Діяльність</b>:  {item.description}
                  </li>
                  <hr className={styles.hr}/>
                  <li className={styles.listItem}>
                      <p><b>Пропозиції до співпраці:</b></p>
                      {item.proposal}
                  </li>
                  <hr className={styles.hr}/>
                <li className={styles.listItem}>
                  <b>Контактна особа </b> - {item.contact_person}
                </li>
                <li className={styles.listItem}>
                  <b>Контактний телефон</b> - {item.phone}
                </li>


                {/*<li className={styles.listItem}>*/}
                {/*  <b>Посилання на картинку</b> - {item.img}*/}
                {/*</li>*/}
              </ul>
            </div>
          ))
        ) : (
          <h4>Нажаль, жодного варіанту не доступно</h4>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
