import styles from "./OffersCategories.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase-config";

import OffersCards from "../../Atom/OfferCards/OfferCards";


const OffersCategories= () => {
    const [categories, setCategories] = useState([]);
    const q = query(collection(db, "categories"), orderBy("position", "asc"));
    useEffect(
        () =>
            onSnapshot(q, (snapshot) => {
                setCategories(
                    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            }),
        []
    );
    console.log(categories);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
        <OffersCards />
      </div>
    </div>
  );
};

export default OffersCategories;
