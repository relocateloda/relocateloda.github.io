import styles from "./OffersCategories.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";


import OffersCards from "../../Atom/OfferCards/OfferCards";
import Navbar from "../../Atom/Navbar/Navbar";
import Footer from  "../../Atom/Footer/Footer"
import { db } from "../../firebase-config";
import { getCategories } from "../../utils/apiCalls/firebaseRequests";


const OffersCategories= () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => getCategories(setCategories), []);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
          { categories && categories.map(cat => <OffersCards categorie={cat} key={cat.id}/>)}
      </div>
      <Footer />
    </div>
  );
};

export default OffersCategories;
