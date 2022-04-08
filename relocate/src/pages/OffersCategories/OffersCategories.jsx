import styles from "./OffersCategories.module.scss";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";


import OffersCards from "../../Atom/OfferCards/OfferCards";
import { db } from "../../firebase-config";


const OffersCategories= () => {
    const [categories, setCategories] = useState(null);
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
          { categories && categories.map(cat => <OffersCards categorie={cat} />)}
      </div>
    </div>
  );
};

export default OffersCategories;
